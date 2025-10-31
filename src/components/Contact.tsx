import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Validação antes do envio
  const handleValidation = (e: React.FormEvent) => {
    if (!formData.name || !formData.email || !formData.message) {
      e.preventDefault();
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Mensagem enviada!",
        description: "Entrarei em contato em breve. Obrigada!",
      });
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(12) 99734-2725",
      link: "tel:+5512997342725",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "tatianedovale.nutri@gmail.com",
      link: "mailto:tatianedovale.nutri@gmail.com",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São José dos Campos - SP",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@tatyvalenutri",
      link: "https://instagram.com/tatyvalenutri",
    },
  ];

  return (
    <section id="contato" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Entre em contato
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Vamos começar sua transformação
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende sua consulta ou tire suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-fade-in space-y-6">
            <div className="bg-background p-8 rounded-2xl shadow-soft space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="font-semibold text-foreground hover:text-primary transition-smooth"
                        target={item.icon === Instagram ? "_blank" : undefined}
                        rel={
                          item.icon === Instagram
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/20">
              <h4 className="font-bold text-lg mb-2">Horário de atendimento</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          {/* ======== FORMULÁRIO FUNCIONAL ======== */}
          <div className="animate-fade-in">
            <form
              action="https://formsubmit.co/tatianedovale.nutri@gmail.com"
              method="POST"
              onSubmit={handleValidation}
              className="bg-background p-8 rounded-2xl shadow-soft space-y-6"
            >
              {/* Configuração do FormSubmit */}
              <input
                type="hidden"
                name="_next"
                value="https://tatydovalenutri.vercel.app/obrigado.html"
              />
              <input
                type="hidden"
                name="_subject"
                value="Novo contato recebido pelo site Tatiane do Vale!"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Seu nome"
                  className="border-2"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="seu@email.com"
                  className="border-2"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Conte um pouco sobre seus objetivos..."
                  className="border-2 min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-white hover:opacity-90 text-lg group"
              >
                Enviar mensagem
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
