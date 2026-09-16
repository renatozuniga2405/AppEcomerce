export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: 'Sastrería' | 'Lino & Seda' | 'Calzado' | 'Accesorios' | 'Novedades';
  tag?: string;
  description: string;
  details: string[];
  composition: string;
  care: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: string[];
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'blazer-oversized-lino',
    name: 'Blazer Oversized en Lino Puro',
    brand: 'Atelier Studio',
    price: 240,
    originalPrice: 280,
    category: 'Sastrería',
    tag: 'Edición Limitada',
    description: 'Sastrería contemporánea deconstruida confeccionada en 100% lino orgánico europeo de alto gramaje. Silueta relajada con hombreras sutiles, cierre frontal con botones de cuerno natural tallado a mano y bolsillos con solapa minimalista.',
    details: [
      'Silueta boyfriend ligeramente oversized',
      'Cierre frontal simple con botón artesanal',
      'Forro interior parcial de viscosa transpirable',
      'Abertura posterior central para mayor libertad de movimiento'
    ],
    composition: '100% Lino Orgánico Europeo certificado. Forro: 100% Viscosa.',
    care: ['Limpieza en seco profesional', 'Planchado suave con vapor', 'No usar secadora'],
    colors: [
      { name: 'Blanco Crudo / Écru', hex: '#F4F1EA' },
      { name: 'Terracota Quemado', hex: '#9E4A3B' },
      { name: 'Negro Carbón', hex: '#191817' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBB6Vs2s46ouAdrwWMXUNpCP1xq1syZT_bD_xMM6saiao6AP4LNoqc72HFHMZqBt2yHKzw3F1kYfWJkOZTqQljiG_qwNrI3UbSjTRvDJNJEdSWuVLqRdlxT1C75aOjnwhzAhZnzHnIGRHVw_f9vKM5cj0yO408yar4AOjSqO6t49bD5b4CTyDnkqsMkRZFW5U3JjFEH4cISwzuLYXTNpNGoDLpSH_kKFysoRU3dXdmrLzAlv3UA6oB1',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5-KRAcVb1hnXq5bAJ5eIO3RXVaLY-An5-7KN_xF8gBzlsj9A294ZmMYm4xAHvuVBciJxV0jFnZELkp1FJzR-MT7mlgWqQ3v5ipYOedaCUYraLZsK7E1foL0Aa9dTlaD3Gs4mXmfYOnAKxHXolTu78WCkrxzZYw0qeXJ93EeOxHZuOy2DT5l1fWAR5Hv8YMwCrN_839PVBQd0rWIwVfOjd0z7wZ3JpfyPl-nT1V2VfPHi1089pR40O',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIgWohSci_vafaLlHPRtwF6DO6jFPCwXx7k-4A1qFgu3xot4_pomDmFsz3mJduSTkfSv60NV2oFibIfG4ZXQwHVKSZ8ACpKsvkhobnPJU0ePlpkBbgTeZcykKk63y4x2uYlrXtbLfr4M6N01OWzctYIuDBeXa8vf0IYHLyd8lekZhLU6lDNhLIgbR4YkbGt3MRSj_iFiTGWqugP1gB_XUoGQpLVIGg4HE9kcE1claQJ3J-4OgHyyiy'
    ],
    featured: true
  },
  {
    id: 'pantalon-fluido-plisado',
    name: 'Pantalón Plisado de Caída Fluida',
    brand: 'Atelier Studio',
    price: 180,
    category: 'Sastrería',
    tag: 'Bestseller',
    description: 'Pantalón de pernera ancha con pinzas dobles en el delantero y tiro alto. Caída escultórica que estiliza la figura garantizando máxima comodidad.',
    details: [
      'Tiro alto con cinturilla estructurada',
      'Pinzas profundas dobles',
      'Bolsillos laterales invisibles',
      'Bajo holgado con caída fluida'
    ],
    composition: '70% Lino Orgánico, 30% Seda Morera.',
    care: ['Lavado a mano en agua fría', 'Planchar del revés'],
    colors: [
      { name: 'Arena Duna', hex: '#E6DEC8' },
      { name: 'Blanco Alabastro', hex: '#FAF9F6' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAylxo5u0GeU5lT_WmU4ndzW0oixNg-QqosRHhwmXTt30z2yOyO1VGVfqn5Etz73VIOdGrYXGp1a9OxgWZenTck5ynDvc-rWtW0KgmNZTbHpgaEcPzBDJAVozEx0F3MjCHCzySKUTe2uVSaBlbpIAY5r6A4bna1MMz-Utx_o6RADRQ_tlslwR7CUsMw7NSlqshOnMhctz4IKIRsnoYz1Pvvqk5yC7Ckdq-0SfL-XzAAUPrTXkO_lVne'
    ],
    featured: true
  },
  {
    id: 'vestido-midi-seda',
    name: 'Vestido Midi en Seda Salvaje',
    brand: 'Édition Spéciale',
    price: 290,
    category: 'Lino & Seda',
    tag: 'Exclusivo',
    description: 'Vestido midi de tirantes finos regulables cortado al bies para abrazar sutilmente la figura. Tejido en seda cruda con brillo satinado natural.',
    details: [
      'Corte al bies favorecedor',
      'Escote sutil en V',
      'Largo midi por encima del tobillo'
    ],
    composition: '100% Seda Salvaje.',
    care: ['Limpieza en seco especializada'],
    colors: [
      { name: 'Ocre Mineral', hex: '#D6A868' },
      { name: 'Ébano Profundo', hex: '#191817' }
    ],
    sizes: ['XS', 'S', 'M'],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBH_ghvrLniIFgiKu00cwlgef2t4LQ3HUXp8LAnFr7DQiGlrn_2Un4-D__RrI_JlmmHxO_9Yx2-S5FRpMPUCVFbVoOuNIqINJ0qbGyav1VAHIg1ukeQMzKUAOVu1BnME8UL1FyQ2odr_PCZ5PkuhWtvIY0CRLvs2eiiiZ_fmzejhomzZVaZQ7OuP0htvCysQtwCKfI5xoIIcEtrXyyLqeWlvb_lV43MhLLijFriKGeD9GBTBiFYDC_Q'
    ],
    featured: true
  },
  {
    id: 'sandalia-artesanal-piel',
    name: 'Sandalia Plana en Piel Vachetta',
    brand: 'Artisanal Footwear',
    price: 150,
    category: 'Calzado',
    tag: 'Artesanal',
    description: 'Calzado elaborado a mano en pequeños talleres mediterráneos. Piel curtida al vegetal con suela de cuero cosida y hebillas en latón envejecido.',
    details: [
      'Tiras de cuero curtido vegetal sin tintes tóxicos',
      'Plantilla acolchada para mayor confort',
      'Suela de cuero natural con inserto antideslizante'
    ],
    composition: '100% Piel de vacuno curtida vegetal. Suela: Cuero y caucho natural.',
    care: ['Nutrir con crema hidratante para piel incolora'],
    colors: [
      { name: 'Cuero Natural', hex: '#9E4A3B' },
      { name: 'Negro Mate', hex: '#222222' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8AdGAd_yHFSDRYwQ3NtT4sqjKH7SZfR9nLM20G5KUpJ2sjjFxBmhIr07Nz_4aiH2WODnm7QfYPxdHr-xA9ujCL3R7obycbVUMG6yvWYp0b7Ry7jWLuth8vEjQLateu53WrhYkGkNEzyTZPo3SphMBRzKD5d_JDUWYugZHazCbIMbuE5xVW0tC6RNTTvSxCS_o4BzbGF9aySl-E9FR-uHMPm89kCSo74SxcJ5x3mJBBtyYm0XJaHN-'
    ],
    featured: true
  },
  {
    id: 'mini-pouch-travertino',
    name: 'Mini Bolso Escultural Travertino',
    brand: 'Atelier Accesoires',
    price: 195,
    category: 'Accesorios',
    description: 'Pieza de diseño geométrico inspirada en la arquitectura brutalista. Cierre magnético oculto con detalles metálicos en latón pulido a mano.',
    details: [
      'Estructura rígida geométrica',
      'Asa de mano y correa de hombro desmontable',
      'Herrajes de latón macizo cepillado'
    ],
    composition: 'Piel lisa de curtido artesanal y forro de ante.',
    care: ['Guardar en funda de algodón suministrada'],
    colors: [
      { name: 'Travertino Arena', hex: '#DDD6C6' },
      { name: 'Oliva Mineral', hex: '#606853' }
    ],
    sizes: ['Única'],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBi_k7usLmZTCZ9ROokaCzZ_VisVH4Pluf3GcfNUlQsx1UOa2HiczbULGOKUxRQO61Tpg-dcseOCBMueCTF26URTt100cii5ihOqFzkvUQ250X5CCp2mic1BC7oqeuvHm9s7pohZpXOfq00jzIAaTDNtrRyfItuTHusfgurjKftonnSUIST1PvbAiepjmVGnIxX4CXbtxSNNiaKcvh_vhmrXD94D0ZdDOHiw40l4mZmVUlJ9BfBHjw1'
    ],
    featured: false
  },
  {
    id: 'camisa-popelin-cuello-mao',
    name: 'Camisa Cuello Mao en Algodón Orgánico',
    brand: 'Atelier Studio',
    price: 135,
    category: 'Novedades',
    tag: 'Nuevo',
    description: 'Camisa de corte minimalista confeccionada en popelín de algodón egipcio de fibra extra larga. Tacto fresco y sedoso, ideal para looks pulidos y relajados.',
    details: [
      'Cuello mao pulido',
      'Tapeta oculta con botones de nácar',
      'Puños redondeados con doble botón'
    ],
    composition: '100% Algodón Egipcio Orgánico.',
    care: ['Lavado a máquina a 30°C', 'Planchar a temperatura media'],
    colors: [
      { name: 'Blanco Óptico', hex: '#FFFFFF' },
      { name: 'Azul Egeo Suave', hex: '#CBD5E1' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAylxo5u0GeU5lT_WmU4ndzW0oixNg-QqosRHhwmXTt30z2yOyO1VGVfqn5Etz73VIOdGrYXGp1a9OxgWZenTck5ynDvc-rWtW0KgmNZTbHpgaEcPzBDJAVozEx0F3MjCHCzySKUTe2uVSaBlbpIAY5r6A4bna1MMz-Utx_o6RADRQ_tlslwR7CUsMw7NSlqshOnMhctz4IKIRsnoYz1Pvvqk5yC7Ckdq-0SfL-XzAAUPrTXkO_lVne'
    ],
    featured: false
  }
];

export const CATEGORIES = [
  'Todas',
  'Sastrería',
  'Lino & Seda',
  'Calzado',
  'Accesorios',
  'Novedades'
] as const;

