import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "5 Dicas para uma alimentação mais saudável",
      excerpt:
        "Descubra como pequenas mudanças podem fazer grande diferença na sua saúde e bem-estar...",
      date: "15 Mar 2024",
      readTime: "5 min",
      category: "Dicas",
    },
    {
      title: "Mitos e verdades sobre emagrecimento",
      excerpt:
        "Vamos desvendar os principais mitos que podem estar atrapalhando seus resultados...",
      date: "10 Mar 2024",
      readTime: "7 min",
      category: "Educação",
    },
    {
      title: "Nutrição pré e pós-treino",
      excerpt:
        "Saiba o que comer antes e depois do treino para maximizar seus resultados...",
      date: "5 Mar 2024",
      readTime: "6 min",
      category: "Esportes",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Conteúdo
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Dicas de alimentação
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artigos e dicas para você cuidar melhor da sua saúde
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary hover:shadow-medium transition-smooth animate-fade-in group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {post.title}
                </h4>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 group-hover:gap-2 transition-smooth"
                  >
                    Ler mais
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
