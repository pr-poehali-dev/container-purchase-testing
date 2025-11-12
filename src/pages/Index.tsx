import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">EvaGold</div>
          <Button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent/90"
          >
            Получить предложение
          </Button>
        </div>
      </header>

      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Оптовые контейнерные закупки из Китая
            </h1>
            <p className="text-2xl text-muted-foreground">
              С максимальной выгодой. Без рисков логистики.
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 h-auto"
            >
              Рассчитать стоимость и получить скидку
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Почему выгодно закупать контейнерами?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4 border-2 hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Percent" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Глубокие скидки до 27%
                </h3>
                <p className="text-muted-foreground">
                  Под своим или нашим брендом. Чем больше предоплата — тем выше скидка.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheck" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Гарантированное качество
                </h3>
                <p className="text-muted-foreground">
                  25 лет на рынке. Стабильные поставки и многоступенчатый контроль.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Package" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Полная поддержка
                </h3>
                <p className="text-muted-foreground">
                  Логистика, маркетинг, брендирование — берём все риски на себя.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Как сделать заказ
              </h2>
              <p className="text-lg text-muted-foreground">
                5 простых шагов до получения коммерческого предложения
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  icon: 'List',
                  title: 'Выберите ассортимент',
                  description: 'Один из трёх готовых вариантов'
                },
                {
                  icon: 'Calculator',
                  title: 'Определите предоплату',
                  description: '10%, 50% или 100%'
                },
                {
                  icon: 'Tag',
                  title: 'Решите по бренду',
                  description: 'EvaGold или ваш собственный'
                },
                {
                  icon: 'DollarSign',
                  title: 'Рассчитайте объём',
                  description: 'Заполните онлайн-калькулятор'
                },
                {
                  icon: 'Send',
                  title: 'Получите предложение',
                  description: 'Индивидуальный расчёт за 1 день'
                }
              ].map((step, index) => (
                <Card key={index} className="p-6 space-y-4 text-center relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={step.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-10 space-y-8 border-2">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-foreground">
                  Готовы зафиксировать лучшую цену?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Оставьте заявку для расчёта стоимости и персональной консультации. 
                  Предложение ограничено.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@company.ru"
                    className="h-12"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-lg h-14"
                >
                  Получить коммерческое предложение
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <div className="text-3xl font-bold">EvaGold</div>
            <p className="text-primary-foreground/80">
              25 лет на рынке сантехники. Контейнерные закупки с гарантией качества.
            </p>
            <div className="pt-8 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/60">
                © 2025 EvaGold. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
