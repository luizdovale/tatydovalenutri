import { Heart, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tatiane do Vale</h3>
            <p className="text-background/80 mb-4">
              Nutricionista especializada em nutrição clínica e esportiva.
              Transformando vidas através da alimentação.
            </p>
            <p className="text-sm text-background/60">
              CRN-X 12345 | São José dos Campos - SP
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-background/80">(12) 99734-2725</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="text-background/80">
                  tatianedovale.nutri@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                <a
                  href="https://instagram.com/tatyvalenutri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  @tatyvalenutri
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center gap-2">
            © {currentYear} Tatiane do Vale - Nutricionista. Desenvolvido por luiz do vale dev {" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
