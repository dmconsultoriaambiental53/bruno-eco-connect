import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-environmental.jpg";

const Hero = () => {
  const whatsappNumber = "5527996477710";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços de consultoria ambiental.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Garanta a sustentabilidade do seu Projeto conosco!
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Atendimento especializado em licenciamento e gestão ambiental em Barra de São Francisco e toda região.
        </p>
        
        <Button 
          variant="hero" 
          size="lg"
          onClick={handleWhatsAppClick}
          className="text-lg px-8 py-6 h-auto"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Fale agora via WhatsApp
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;