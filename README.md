# Julio Joyas — MVP Perfumería

Prototipo funcional (catálogo + carrito) para presentar a Julio Joyas
(https://www.instagram.com/julio.joyas/), construido con **React + Vite + Tailwind**,
usando la paleta e identidad real del logo (negro + degradé dorado).

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Foto de banner (hero)

En `src/config/site.js`, el campo `heroImage` acepta una URL o ruta local
(ej: `/images/banner/promo.jpg`, colocando el archivo en `public/images/banner/`).
Si lo dejas vacío, se usa el fondo degradado negro/dorado actual. Cuando tengas
una foto tipo banner o de campaña promocional, solo pégala ahí — no hay que
tocar el componente `Hero.jsx`.

## Agregar fotos reales de los productos

Cada producto en `src/data/products.js` tiene un campo `image`. Dos formas de usarlo:

1. **Foto local**: coloca el archivo en `public/images/products/` y escribe la ruta
   en el producto, ej: `image: "/images/products/khamrah.jpg"`.
2. **URL externa**: pega directamente el link de la imagen, ej:
   `image: "https://.../khamrah.jpg"`.

Si `image` queda vacío (`""`), o la URL falla, el catálogo muestra automáticamente
un ícono de botella ilustrado como respaldo — nunca se ve una imagen rota.

## Estructura

```
src/
  data/products.js        Fuente única de datos del catálogo (reemplazable por Supabase/API)
  utils/formatCurrency.js Formateo de moneda CLP
  hooks/useCart.js         Toda la lógica del carrito, sin JSX, testeable aislada
  components/
    layout/                Navbar, Footer
    home/                  Hero
    catalog/                Filtro, grilla, tarjeta de producto, ícono de botella
    cart/                   Panel lateral del carrito y su item
  App.jsx                  Orquesta el estado y compone las piezas, sin lógica de negocio
```

Principios aplicados:
- **Single responsibility**: cada componente hace una sola cosa.
- **Datos separados de la UI**: cambiar `products.js` por una llamada a Supabase no
  requiere tocar ningún componente, mientras se mantenga la misma forma de objeto.
- **Lógica de estado en hooks**: `useCart` puede testearse sin renderizar nada.
- **Sin imágenes con derechos de terceros**: las botellas son SVG generado por código.

## Próximos pasos sugeridos (para producción)

0. La barra de búsqueda y el botón "Filtrar" (arriba de las categorías) están
   deshabilitados a propósito, como preview de "próximamente". Cuando se
   decida seguir con el proyecto, se conecta la búsqueda por nombre/marca y
   filtros por precio o familia olfativa sobre `PRODUCTS`.
1. Reemplazar `src/data/products.js` por un cliente de Supabase (`supabase-js`),
   manteniendo el mismo `Product` shape.
2. Agregar autenticación de administrador para que el dueño suba productos desde un panel.
3. Conectar el botón "Continuar compra" a WhatsApp Business API o una pasarela de pago
   (Webpay, Flow, MercadoPago).
4. Subir fotografías reales de los productos y reemplazar los íconos SVG donde el
   negocio lo prefiera.
5. Desplegar en Vercel o Netlify.
