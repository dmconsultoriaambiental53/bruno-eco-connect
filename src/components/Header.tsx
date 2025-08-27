import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const whatsappNumber = "5527999999999"; // Replace with actual number
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços de consultoria ambiental.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/35088a10-9fab-42ff-adc7-c36f2109f33c.png" 
            alt="DM Consultoria Ambiental" 
            className="h-12 w-auto"
          />
        </div>
        
        <Button 
          variant="whatsapp" 
          onClick={handleWhatsAppClick}
          className="flex items-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Button>
      </div>
    </header>
  );
};

export default Header;