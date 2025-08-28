import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileCheck, 
  Search, 
  TreePine, 
  Recycle, 
  Droplets, 
  MapIcon, 
  Tractor, 
  Dam,
  Waves
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Licenciamento Ambiental",
      description: "Autorização para atividades com potencial impacto, garantindo conformidade legal e sustentabilidade."
    },
    {
      icon: Search,
      title: "Perícia Ambiental", 
      description: "Avaliação técnica para identificar e mensurar danos ambientais em processos judiciais ou administrativos."
    },
    {
      icon: TreePine,
      title: "Plano de Recuperação de Áreas Degradadas (PRAD)",
      description: "Projeto de restauração ecológica de áreas afetadas por desmatamento, erosão ou contaminação."
    },
    {
      icon: Recycle,
      title: "Gerenciamento de Resíduos",
      description: "Planejamento e execução para resíduos domésticos, industriais e hospitalares."
    },
    {
      icon: Droplets,
      title: "Efluentes",
      description: "Tratamento e descarte seguro de líquidos hospitalares ou industriais."
    },
    {
      icon: MapIcon,
      title: "Cadastro Ambiental Rural (CAR)",
      description: "Registro obrigatório para imóveis rurais com controle de uso e preservação ambiental."
    },
    {
      icon: Tractor,
      title: "Licenciamento Rural",
      description: "Regularização ambiental de atividades agropecuárias."
    },
    {
      icon: Dam,
      title: "Barragens",
      description: "Licenças, estudos e planos relacionados à construção e operação de barragens."
    },
    {
      icon: Waves,
      title: "Outorgas de Uso da Água",
      description: "Autorização legal para captação e uso racional de recursos hídricos."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos serviços
          </h2>
          <div className="w-24 h-1 bg-nature-gradient mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para todas as suas necessidades ambientais, 
            com expertise técnica e foco na sustentabilidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-leaf transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;