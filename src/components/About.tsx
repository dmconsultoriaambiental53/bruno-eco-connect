import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin } from "lucide-react";
const About = () => {
  const credentials = ["Biólogo (CRbio 131793/10-D)", "Tecnólogo em Gestão Ambiental", "Engenheiro Ambiental e Sanitarista", "Técnico em Construção Civil (CRT ES 11394848773)"];
  return <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que é a DM?
            </h2>
            <div className="w-24 h-1 bg-nature-gradient mx-auto mb-8"></div>
          </div>
          
          <Card className="overflow-hidden shadow-leaf">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex flex-col items-center mb-8">
                    <img src="/lovable-uploads/7d2ca52c-5af4-464f-a280-e49902497cff.png" alt="Bruno Gonçalves Silva" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary/20" />
                    <h3 className="text-2xl font-semibold text-center">Bruno Gonçalves Silva</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Formação Profissional</h3>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {credentials.map((credential, index) => <Badge key={index} variant="secondary" className="text-sm px-3 py-1 block w-fit">
                        {credential}
                      </Badge>)}
                  </div>
                  
                  
                </div>
                
                <div className="bg-muted rounded-lg p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    A DM Consultoria Ambiental é uma empresa que ajuda você a cuidar do meio ambiente enquanto desenvolve seu projeto. Liderada por Bruno Gonçalves Silva, biólogo e engenheiro ambiental, oferecemos serviços práticos e eficazes para fazer seu empreendimento cumprir todas as regras ambientais.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Na prática, fazemos licenciamento ambiental, perícias, planos de recuperação para áreas degradadas e gerenciamento de resíduos. Nosso objetivo é facilitar a vida dos nossos clientes, garantindo que tudo seja feito de forma correta e sustentável.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Estamos aqui para garantir que seu projeto impacte positivamente o meio ambiente e para ajudar você a crescer de forma verde e responsável.
                  </p>
                  
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;