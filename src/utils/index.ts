export const formatPrice = (price: string) => {
  const formattedPrice = price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${formattedPrice}`
}