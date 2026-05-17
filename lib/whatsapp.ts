export function buildWhatsAppLink(
  productName?: string,
  size?: number,
  type?: string,
  price?: number
): string {
  const base = "https://wa.me/56964788533?text=";
  if (!productName) {
    return (
      base +
      encodeURIComponent(
        "Hola Coast Parfum! 👋 Quiero consultar sobre sus perfumes disponibles."
      )
    );
  }
  return (
    base +
    encodeURIComponent(
      `Hola Coast Parfum! 👋 Me interesa el ${productName} ${size}ml ${type} a $${price?.toLocaleString(
        "es-CL"
      )}. ¿Tienen disponibilidad? ¿Cuál es el costo de envío a mi dirección en la V Región?`
    )
  );
}
