/**
 * Utilidades de formateo para la tienda
 */

/**
 * Formatea un precio en Pesos Colombianos (COP)
 * @param price - Precio a formatear
 * @returns Precio formateado (ej: "$59.900")
 */
export function formatCOP(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Calcula el porcentaje de descuento
 * @param originalPrice - Precio original
 * @param salePrice - Precio de venta
 * @returns Porcentaje de descuento (ej: 25)
 */
export function calculateDiscount(originalPrice: number, salePrice: number): number {
  if (!originalPrice || originalPrice <= salePrice) return 0;
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

/**
 * Formatea el descuento como texto
 * @param originalPrice - Precio original
 * @param salePrice - Precio de venta
 * @returns Texto del descuento (ej: "-25%")
 */
export function formatDiscount(originalPrice: number, salePrice: number): string {
  const discount = calculateDiscount(originalPrice, salePrice);
  return discount > 0 ? `-${discount}%` : '';
}

/**
 * Formatea un número con separadores de miles
 * @param num - Número a formatear
 * @returns Número formateado (ej: "1.234.567")
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-CO').format(num);
}
