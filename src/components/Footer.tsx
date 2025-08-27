import { MapPin, Phone, Mail, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/35088a10-9fab-42ff-adc7-c36f2109f33c.png" 
              alt="DM Consultoria Ambiental" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Consultoria especializada em soluções ambientais sustentáveis 
              para Barra de São Francisco e região.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(27) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@dmconsultoria.com.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Barra de São Francisco - ES</span>
              </div>
            </div>
          </div>
          
          {/* Professional Info */}
          <div>
            <h3 className="font-bold mb-4">Informações Profissionais</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>CRbio 131793/10-D</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>CRT ES 11394848773</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 DM Consultoria Ambiental. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;