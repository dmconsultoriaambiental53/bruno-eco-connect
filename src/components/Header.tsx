import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const whatsappNumber = "5527996477710";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços de consultoria ambiental.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Quem somos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('region')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Região atendida
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contatos
            </button>
          </nav>
          
          <Button 
            variant="whatsapp" 
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        <div className="md:hidden">
          <Button 
            variant="whatsapp" 
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;