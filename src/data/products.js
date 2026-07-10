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
  { id: 1, name: "Khamrah", brand: "Lattafa", category: "arabe", family: "amber", price: 28000, note: "Especiado oriental — canela, dátiles y vainilla cálida.", image: "" },
  { id: 2, name: "Amber Oud", brand: "Al Haramain", category: "arabe", family: "oud", price: 45000, note: "Oud profundo con ámbar resinoso y toques de rosa.", image: "" },
  { id: 3, name: "Amber Wood", brand: "Ajmal", category: "arabe", family: "amber", price: 38000, note: "Amaderado ambarado, dulce y envolvente.", image: "" },
  { id: 4, name: "Shaghaf Oud", brand: "Swiss Arabian", category: "arabe", family: "oud", price: 52000, note: "Oud intenso, ahumado, para noches largas.", image: "" },
  { id: 5, name: "Hawas", brand: "Rasasi", category: "arabe", family: "citrus", price: 32000, note: "Fresco especiado con salida cítrica vibrante.", image: "" },
  { id: 6, name: "Fakhar", brand: "Lattafa", category: "arabe", family: "rose", price: 27000, note: "Floral oriental, rosa y azafrán.", image: "" },
  { id: 7, name: "Sauvage EDT 100ml", brand: "Dior", category: "disenador", family: "citrus", price: 115000, note: "Fresco amaderado, bergamota y ambroxan.", image: "" },
  { id: 8, name: "Black Opium 90ml", brand: "YSL", category: "disenador", family: "rose", price: 98000, note: "Floral gourmand, café y vainilla.", image: "" },
  { id: 9, name: "Bleu de Chanel 100ml", brand: "Chanel", category: "disenador", family: "citrus", price: 135000, note: "Cítrico amaderado, elegante y versátil.", image: "" },
  { id: 10, name: "212 VIP 80ml", brand: "Carolina Herrera", category: "disenador", family: "rose", price: 89000, note: "Floral afrutado, dorado y festivo.", image: "" },
  { id: 11, name: "Eros 100ml", brand: "Versace", category: "disenador", family: "citrus", price: 92000, note: "Fresco especiado, menta y vainilla.", image: "" },
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
