/**
 * Catálogo de productos.
 *
 * Esta es la única fuente de verdad para los datos del MVP.
 * Cuando se conecte un backend real (Supabase/Django), este archivo
 * se reemplaza por una llamada a la API sin tocar ningún componente,
 * siempre que se respete la misma forma de objeto (Product shape).
 *
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} brand
 * @property {'arabe'|'disenador'} category
 * @property {'amber'|'oud'|'rose'|'citrus'} family - familia olfativa, define el color del ícono de respaldo
 * @property {number} price - precio referencial en CLP
 * @property {string} note - descripción corta de la fragancia
 * @property {string} image - URL o ruta de la foto real del producto. Puede ser:
 *   1) una ruta local dentro de /public, ej: "/images/products/khamrah.jpg"
 *      (coloca el archivo en public/images/products/ y usa esa misma ruta)
 *   2) una URL externa directa a la imagen, ej: "https://.../khamrah.jpg"
 *   Si queda vacío (""), el catálogo muestra automáticamente el ícono SVG
 *   de respaldo coloreado según `family`, así nunca se ve una imagen rota.
 */

/** @type {Product[]} */
export const PRODUCTS = [
  { id: 1, name: "Khamrah", brand: "Lattafa", category: "arabe", family: "amber", price: 28000, note: "Especiado oriental — canela, dátiles y vainilla cálida.", image: "public/images/products/Khamrah.jpg" },
  { id: 2, name: "Amber Oud", brand: "Al Haramain", category: "arabe", family: "oud", price: 45000, note: "Oud profundo con ámbar resinoso y toques de rosa.", image: "public/images/products/AmberOud.jpg" },
  { id: 3, name: "Hawas Tropical", brand: "Rasasi", category: "arabe", family: "citrus", price: 38000, note: "Tropical, dulce y envolvente.", image: "public/images/products/HawasTropical.jpg" },
  { id: 4, name: "Shaghaf Oud", brand: "Swiss Arabian", category: "arabe", family: "oud", price: 52000, note: "Oud intenso, ahumado, para noches largas.", image: "public/images/products/ShaghafOud.jpg" },
  { id: 5, name: "Hawas", brand: "Rasasi", category: "arabe", family: "citrus", price: 32000, note: "Fresco especiado con salida cítrica vibrante.", image: "public/images/products/Hawas.jpg" },
  { id: 6, name: "Fakhar", brand: "Lattafa", category: "arabe", family: "rose", price: 27000, note: "Floral oriental, rosa y azafrán.", image: "public/images/products/Fakhar.jpg" },
  { id: 7, name: "Sauvage EDT 100ml", brand: "Dior", category: "disenador", family: "citrus", price: 115000, note: "Fresco amaderado, bergamota y ambroxan.", image: "public/images/products/Sauvage.jpg" },
  { id: 8, name: "Black Opium 90ml", brand: "YSL", category: "disenador", family: "rose", price: 98000, note: "Floral gourmand, café y vainilla.", image: "public/images/products/BlackOpium.jpg" },
  { id: 9, name: "Bleu de Chanel 100ml", brand: "Chanel", category: "disenador", family: "citrus", price: 135000, note: "Cítrico amaderado, elegante y versátil.", image: "public/images/products/BleuChanel.jpg" },
  { id: 10, name: "212 VIP 80ml", brand: "Carolina Herrera", category: "disenador", family: "rose", price: 89000, note: "Floral afrutado, dorado y festivo.", image: "public/images/products/212VIP.jpg" },
  { id: 11, name: "Eros 100ml", brand: "Versace", category: "disenador", family: "citrus", price: 92000, note: "Fresco especiado, menta y vainilla.", image: "public/images/products/ErosVersace.jpg" },
];

export const CATEGORIES = [
  { value: "todos", label: "Todos" },
  { value: "arabe", label: "Árabes" },
  { value: "disenador", label: "Diseñador" },
];

/** Degradés SVG por familia olfativa. */
export const FAMILY_GRADIENTS = {
  amber: ["#f0c37a", "#b9711e"],
  oud: ["#e3a73b", "#5c3410"],
  rose: ["#e8a6b8", "#7a2c40"],
  citrus: ["#eddb8a", "#b9862a"],
};
