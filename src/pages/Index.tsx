import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Никита Смирнов</h1>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Обо мне
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Образование
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Достижения
            </button>
            <button
              onClick={() => scrollToSection("hobbies")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Увлечения
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img
                src="https://cdn.poehali.dev/files/59b87fac-8cda-4302-94e2-cabb1d3a2b53.jpg"
                alt="Никита Смирнов"
                className="w-64 h-64 rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Никита Смирнов Сергеевич
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Преподаватель английского языка
              </p>
              <Button
                onClick={() => scrollToSection("about")}
                className="gap-2"
              >
                Узнать больше
                <Icon name="ArrowDown" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Icon name="User" size={32} className="text-primary" />
            Обо мне
          </h3>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-foreground leading-relaxed">
                Я преподаватель английского языка с опытом работы со всеми
                возрастными группами. Получил образование в Череповецком
                Государственном Университете и прошёл практику в школе №14 у
                старших и средних классов. В свободное время занимаюсь
                репетиторством английского языка для всех возрастов, помогая
                студентам достигать их целей в изучении языка.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="education" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Icon name="GraduationCap" size={32} className="text-primary" />
            Образование
          </h3>
          <div className="space-y-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="School" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Череповецкий Государственный Университет
                    </h4>
                    <p className="text-muted-foreground">
                      Высшее образование в области преподавания иностранных
                      языков
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="BookOpen" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Практика в школе №14
                    </h4>
                    <p className="text-muted-foreground">
                      Педагогическая практика у старших и средних классов
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="School" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Среднее общее образование
                    </h4>
                    <p className="text-muted-foreground">
                      Школы №39, №40, №32
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Icon name="Trophy" size={32} className="text-primary" />
            Достижения
          </h3>
          <div className="space-y-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Участие в олимпиадах по английскому языку
                    </h4>
                    <p className="text-muted-foreground">
                      Активное участие в олимпиадах и конкурсах по английскому
                      языку
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Репетиторство
                    </h4>
                    <p className="text-muted-foreground">
                      Опыт преподавания английского языка для всех возрастных
                      групп в качестве частного репетитора
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="hobbies" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Icon name="Heart" size={32} className="text-primary" />
            Увлечения
          </h3>
          <div className="space-y-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Car" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Автомобили
                    </h4>
                    <p className="text-muted-foreground">
                      Увлекаюсь автомобилями и изучением их устройства
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Курсы автомеханики
                    </h4>
                    <p className="text-muted-foreground">
                      Прохожу обучение на курсах автомеханики для углубления
                      знаний
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            © 2025 Никита Смирнов Сергеевич. Преподаватель английского языка.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;