import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Target, Phone } from "lucide-react";

const Region = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Atendimento Local com Conhecimento Regional
            </h2>
            <div className="w-24 h-1 bg-nature-gradient mx-auto mb-6"></div>
          </div>
          
          <Card className="overflow-hidden shadow-leaf">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Barra de São Francisco e Região</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Atendemos Barra de São Francisco e toda a região com agilidade, 
                    conhecimento das exigências locais e foco em soluções personalizadas 
                    para cada cliente.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-medium">Atendimento ágil e personalizado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="font-medium">Conhecimento das exigências locais</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="font-medium">Suporte técnico especializado</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-8 text-center">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-12 w-12 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Cobertura Regional</h4>
                    <p className="text-muted-foreground">
                      Atendimento especializado em todo o noroeste capixaba
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">Principais cidades atendidas:</p>
                    <div className="text-sm font-medium space-y-1">
                      <div>Barra de São Francisco</div>
                      <div>Ecoporanga</div>
                      <div>Água Doce do Norte</div>
                      <div>Vila Pavão</div>
                      <div>E região</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Region;