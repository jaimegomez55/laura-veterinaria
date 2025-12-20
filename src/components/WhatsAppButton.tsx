export default function WhatsAppButton() {
  const phoneNumber = "34634359766"; // Número sin espacios ni símbolos
  const message = encodeURIComponent("Hola, me gustaría obtener más información sobre tus servicios.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Contactar por WhatsApp"
    >
      <i className="ri-whatsapp-fill text-white text-2xl md:text-3xl"></i>
      <span className="absolute -top-12 right-0 bg-gray-800 text-white text-xs md:text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Escríbeme y resuelvo tus dudas
      </span>
    </a>
  );
}

