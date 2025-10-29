import { Apple, ActivitySquare, Utensils, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Apple,
      title: "Consulta Nutricional",
      description:
        "Avaliação completa do seu estado nutricional com anamnese detalhada e exames.",
    },
    {
      icon: Utensils,
      title: "Plano Alimentar Personalizado",
      description:
        "Cardápio elaborado especialmente para você, considerando suas preferências e rotina.",
    },
    {
      icon: ActivitySquare,
      title: "Nutrição Esportiva",
      description:
        "Planejamento nutricional para otimizar seu desempenho e recuperação nos treinos.",
    },
    {
      icon: Scale,
      title: "Reeducação Alimentar",
      description:
        "Mudança de hábitos de forma gradual e sustentável, sem dietas restritivas.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Como posso ajudar
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Serviços oferecidos
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendimento completo e personalizado para todas as suas necessidades
            nutricionais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary hover:shadow-medium transition-smooth animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
