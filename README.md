# ATELIER — E-Commerce Editorial Fashion House

Aplicación web de comercio electrónico de alta costura contemporánea y lujo silencioso, construida con **Astro 5**, **Tailwind CSS** y basada en el sistema de diseño extraído de **Google Stitch** (Proyecto *AppEcomerce* / Tema *Contemporary Fashion Atelier*).

---

## ✨ Características Principales

- **Diseño Editorial de Lujo:** Paleta de colores orgánicos (`#191817` Ébano, `#9E4A3B` Terracota, `#FAF9F6` Marfil Alabastro) y tipografías editoriales (*Playfair Display* & *Plus Jakarta Sans*).
- **Navegación Fluida (SPA):** Transiciones de página instantáneas implementadas con `<ClientRouter />` de Astro.
- **Catálogo Interactivo con Filtros:** Exploración de prendas por categorías (*Sastrería*, *Lino & Seda*, *Calzado*, *Accesorios*, *Novedades*) y ordenación por precio.
- **Ficha de Prenda (PDP):** Galería fotográfica en aspecto 3:4, selección de colores, selectores de talla, acordeones de composición/envío y barra flotante de compra para dispositivos móviles.
- **Bolsa de Compra Reactiva:** Estado del carrito persistente en `localStorage` con cálculo automático de subtotales, desglose de IVA (21%), umbral de envío gratuito (>200 €), cupones de descuento y control de cantidades en tiempo real.
- **Diseño Mobile-First Responsivo:** Adaptado con navegación inferior fija para móviles y encabezado expandido para escritorio.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Astro 5](https://astro.build/) (Static Mode)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconos & Tipografía:** Google Fonts (*Playfair Display*, *Plus Jakarta Sans*) & Material Symbols Outlined
- **Estado Cliente:** JavaScript reactivo con `localStorage` y Custom Events
- **Diseño UI Original:** Google Stitch MCP

---

## 🚀 Inicio Rápido en Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/renatozuniga2405/AppEcomerce.git
cd AppEcomerce
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver la tienda en funcionamiento.

### 4. Compilar para producción
```bash
npm run build
```
Los archivos estáticos optimizados se generarán en la carpeta `dist/`.

---

## 📁 Estructura del Proyecto

```
AppEcomerce/
├── public/                 # Favicon y recursos estáticos
├── src/
│   ├── components/         # Header, BottomNav, ProductCard
│   ├── data/               # Catálogo de productos tipados (products.ts)
│   ├── layouts/            # Layout maestro con ClientRouter
│   ├── pages/
│   │   ├── index.astro     # Home Editorial
│   │   ├── catalogo.astro  # Catálogo con filtros
│   │   ├── carrito.astro   # Bolsa de compras y checkout
│   │   └── producto/       # Ficha de detalle de producto ([id].astro)
│   ├── stores/             # Lógica reactiva del carrito (cart.ts)
│   └── styles/             # Tokens CSS y directivas Tailwind (global.css)
├── stitch-screens/         # Archivos originales exportados desde Stitch
├── astro.config.mjs        # Configuración de Astro
└── tailwind.config.mjs     # Configuración de Tailwind con tokens Stitch
```

---

## 📄 Licencia

MIT © 2025 ATELIER Fashion House.

