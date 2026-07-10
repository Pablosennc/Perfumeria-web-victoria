/**
 * Formatea un número como moneda chilena (CLP).
 * @param {number} amount
 * @returns {string}
 */
export function formatCLP(amount) {
  return amount.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  });
}
