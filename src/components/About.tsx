import { Award, Heart, Users } from "lucide-react";
import nutritionistPhoto from "@/assets/nutritionist-photo.jpg";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Especialização",
      description: "CRN ativo com formação em nutrição clínica e esportiva",
    },
    {
      icon: Heart,
      title: "Atendimento humanizado",
      description: "Cuidado personalizado respeitando sua individualidade",
    },
    {
      icon: Users,
      title: "+500 pacientes",
      description: "Transformações reais e resultados sustentáveis",
    },
  ];

  return (
    <section id="sobre" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src={nutritionistPhoto}
              alt="Tatiane do Vale - Nutricionista"
              className="rounded-2xl shadow-medium w-full max-w-md mx-auto"
            />
          </div>

          <div className="animate-fade-in space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Conheça a profissional
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Tatiane do Vale
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou nutricionista formada com pós-graduação em nutrição clínica e
              esportiva. Minha missão é ajudar você a transformar sua relação
              com a comida, desenvolvendo hábitos saudáveis e sustentáveis que
              cabem na sua rotina.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Acredito que cada pessoa é única, por isso meus atendimentos são
              personalizados, considerando não apenas aspectos nutricionais, mas
              também seu estilo de vida, preferências e objetivos pessoais.
            </p>

            <div className="grid gap-6 pt-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
