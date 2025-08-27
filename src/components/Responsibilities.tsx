import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Microscope, FileText, Shield, Users } from "lucide-react";

const Responsibilities = () => {
  const responsibilities = [
    {
      icon: Microscope,
      title: "Diagnóstico e monitoramento de fauna, flora e ecossistemas",
      description: "Análise detalhada da biodiversidade e condições ambientais."
    },
    {
      icon: FileText,
      title: "Elaboração de estudos técnicos (EIA/RIMA, RCA, PRAD, entre outros)",
      description: "Documentos especializados para licenciamento e gestão ambiental."
    },
    {
      icon: Shield,
      title: "Execução de planos de conservação e manejo de fauna",
      description: "Estratégias para proteção e manejo sustentável da vida selvagem."
    },
    {
      icon: Users,
      title: "Atuação como perito ambiental em processos judiciais",
      description: "Expertise técnica em questões legais ambientais."
    },
    {
      icon: CheckCircle,
      title: "Consultoria técnica para empresas e produtores rurais",
      description: "Orientação especializada para conformidade e sustentabilidade."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Papel do Biólogo na Sustentabilidade
            </h2>
            <div className="w-24 h-1 bg-nature-gradient mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Atribuições técnicas que garantem a preservação ambiental e o desenvolvimento sustentável.
            </p>
          </div>
          
          <div className="space-y-6">
            {responsibilities.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-leaf transition-all duration-300 border-border/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;