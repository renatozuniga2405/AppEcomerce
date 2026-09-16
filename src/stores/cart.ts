export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

const STORAGE_KEY = 'atelier_cart_v1';

// Initial seed matching the Stitch bag design
const DEFAULT_CART: CartItem[] = [
  {
    id: 'blazer-oversized-lino',
    name: 'Blazer Oversized en Lino Puro',
    price: 240,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB6Vs2s46ouAdrwWMXUNpCP1xq1syZT_bD_xMM6saiao6AP4LNoqc72HFHMZqBt2yHKzw3F1kYfWJkOZTqQljiG_qwNrI3UbSjTRvDJNJEdSWuVLqRdlxT1C75aOjnwhzAhZnzHnIGRHVw_f9vKM5cj0yO408yar4AOjSqO6t49bD5b4CTyDnkqsMkRZFW5U3JjFEH4cISwzuLYXTNpNGoDLpSH_kKFysoRU3dXdmrLzAlv3UA6oB1',
    size: 'S',
    color: 'Blanco Crudo',
    quantity: 1
  }
];

export function getStoredCart(): CartItem[] {
  if (typeof window === 'undefined') return DEFAULT_CART;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_CART));
      return DEFAULT_CART;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading cart from localStorage', e);
    return DEFAULT_CART;
  }
}

export function saveCart(items: CartItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('atelier:cart-updated', { detail: { items } }));
  } catch (e) {
    console.error('Error saving cart to localStorage', e);
  }
}

export function addToCart(item: Omit<CartItem, 'quantity'>, quantity: number = 1): void {
  const current = getStoredCart();
  const existingIndex = current.findIndex(
    i => i.id === item.id && i.size === item.size && i.color === item.color
  );

  if (existingIndex > -1) {
    current[existingIndex].quantity += quantity;
  } else {
    current.push({ ...item, quantity });
  }

  saveCart(current);
}

export function updateQuantity(id: string, size: string, color: string, delta: number): void {
  const current = getStoredCart();
  const index = current.findIndex(
    i => i.id === id && i.size === size && i.color === color
  );

  if (index > -1) {
    current[index].quantity += delta;
    if (current[index].quantity <= 0) {
      current.splice(index, 1);
    }
    saveCart(current);
  }
}

export function removeFromCart(id: string, size: string, color: string): void {
  const current = getStoredCart().filter(
    i => !(i.id === id && i.size === size && i.color === color)
  );
  saveCart(current);
}

export function getCartTotals(items: CartItem[]) {
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = subtotal > 200 || subtotal === 0 ? 0 : 15;
  const total = subtotal + shipping;
  return { count, subtotal, shipping, total };
}

