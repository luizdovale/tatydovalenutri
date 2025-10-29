import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5512997342725";
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta nutricional."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-40 rounded-full w-14 h-14 md:w-16 md:h-16 shadow-medium hover:scale-110 transition-smooth gradient-primary text-white p-0"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </Button>
  );
};

export default WhatsAppButton;
