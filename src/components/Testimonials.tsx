import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      comment:
        "A Tatiane mudou completamente minha relação com a comida. Perdi 12kg de forma saudável e sem sofrimento!",
      rating: 5,
    },
    {
      name: "João Santos",
      comment:
        "Profissional excepcional! O acompanhamento é próximo e os resultados são incríveis. Super recomendo!",
      rating: 5,
    },
    {
      name: "Ana Paula",
      comment:
        "Depois de anos tentando emagrecer, finalmente encontrei uma nutricionista que entende minhas necessidades.",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      comment:
        "Melhorei meu desempenho nos treinos e ainda consegui ganhar massa muscular. Obrigado, Tatiane!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Histórias de sucesso
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            O que dizem os pacientes
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja os depoimentos de quem já transformou sua saúde comigo
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-3">
                    <Card className="border-2 hover:border-primary hover:shadow-medium transition-smooth">
                      <CardContent className="p-6">
                        <Quote className="w-10 h-10 text-primary/20 mb-4" />
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-primary text-primary"
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4 italic">
                          "{testimonial.comment}"
                        </p>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
