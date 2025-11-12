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
      title: 'Заявка отправлена!',
      description: 'Мы подготовим для вас индивидуальное предложение.'
    });
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-[#e8e6e1]">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#0d5f5f] via-[#0d6f6f] to-[#0d7f7f]" 
             style={{
               clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
             }}>
        </div>

        <div className="absolute top-6 right-12 z-20">
          <div className="text-4xl font-bold text-white tracking-wider" 
               style={{ fontFamily: 'system-ui, sans-serif' }}>
            EvaGold
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-12 py-16">
          <div className="grid grid-cols-2 gap-16 items-center min-h-[90vh]">
            <div className="text-white space-y-8">
              <p className="text-sm uppercase tracking-wide opacity-90">Коммерческое предложение</p>
              
              <h1 className="text-6xl font-bold leading-tight">
                ОПТОВЫЕ КОНТЕЙНЕРНЫЕ<br />
                ЗАКУПКИ ИЗ КИТАЯ
              </h1>

              <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4">
                <p className="text-2xl">С максимальной выгодой</p>
              </div>

              <div className="space-y-6 pt-8">
                <h2 className="text-3xl font-semibold">Уважаемые партнеры!</h2>
                <p className="text-lg leading-relaxed opacity-90">
                  Мы рады предложить вам уникальные условия для<br />
                  оптовых закупок с максимальными скидками и<br />
                  гарантированным качеством.
                </p>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-semibold mb-6 uppercase">
                  НАША ПРОГРАММА КОНТЕЙНЕРНЫХ<br />
                  ПОСТАВОК ПОЗВОЛЯЕТ ВАМ:
                </h3>

                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name="Percent" size={36} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">ПОЛУЧАТЬ ГЛУБОКИЕ<br />СКИДКИ</h4>
                      <p className="text-sm opacity-80">(до 27% под нашим брендом<br />и до 25% под вашим).</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name="ShieldCheck" size={36} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">ГАРАНТИРОВАТЬ<br />СТАБИЛЬНЫЕ ПОСТАВКИ</h4>
                      <p className="text-sm opacity-80">без рисков, связанных с<br />логистикой и курсовыми<br />колебаниями.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name="TrendingUp" size={36} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">РАЗВИВАТЬ<br />СОБСТВЕННЫЙ БРЕНД</h4>
                      <p className="text-sm opacity-80">с нашей поддержкой.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/7a09e2c2-3bfc-441a-a903-baeee76288c0.jpg"
                  alt="Container"
                  className="w-full max-w-2xl"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-12 z-20">
          <div className="text-white text-sm">www.grandfayans.ru</div>
        </div>
      </section>

      <section className="bg-[#e8e6e1] py-20">
        <div className="container mx-auto px-12">
          <div className="relative">
            <div className="absolute top-6 right-12">
              <div className="text-4xl font-bold text-[#0d6f6f] tracking-wider">EvaGold</div>
            </div>

            <div className="space-y-16">
              <div>
                <h2 className="text-5xl font-bold text-[#333] mb-4">Условия закупки</h2>
                <p className="text-xl text-[#666]">Варианты ассортимента</p>
              </div>

              <p className="text-lg text-[#555]">
                Вы можете выбрать один из трех готовых наборов продукции (миксовать нельзя):
              </p>

              <div className="grid grid-cols-3 gap-8">
                <Card className="bg-white border-2 border-[#0d6f6f]/20 p-8 space-y-6 hover:border-[#0d6f6f] transition-all">
                  <div className="bg-[#0d6f6f] text-white px-6 py-2 inline-block font-bold text-lg">
                    Вариант 1:
                  </div>
                  <div className="h-48 flex items-center justify-center">
                    <Icon name="Package" size={80} className="text-[#0d6f6f]" />
                  </div>
                  <p className="text-[#555] leading-relaxed">
                    Унитазы-моноблоки серии SM (премиальное качество, топовые модели)
                  </p>
                </Card>

                <Card className="bg-white border-2 border-[#0d6f6f]/20 p-8 space-y-6 hover:border-[#0d6f6f] transition-all">
                  <div className="bg-[#0d6f6f] text-white px-6 py-2 inline-block font-bold text-lg">
                    Вариант 2:
                  </div>
                  <div className="h-48 flex items-center justify-center">
                    <Icon name="Boxes" size={80} className="text-[#0d6f6f]" />
                  </div>
                  <p className="text-[#555] leading-relaxed">
                    Комбинированный ассортимент (моноблоки, компакты, подвесные модели).
                  </p>
                </Card>

                <Card className="bg-white border-2 border-[#0d6f6f]/20 p-8 space-y-6 hover:border-[#0d6f6f] transition-all">
                  <div className="bg-[#0d6f6f] text-white px-6 py-2 inline-block font-bold text-lg">
                    Вариант 3:
                  </div>
                  <div className="h-48 flex items-center justify-center">
                    <Icon name="Grid3x3" size={80} className="text-[#0d6f6f]" />
                  </div>
                  <p className="text-[#555] leading-relaxed">
                    Расширенная линейка (моноблоки, подвесные унитазы, инсталляции).
                  </p>
                </Card>
              </div>

              <p className="text-base text-[#666] pt-4">
                Объем заказа: 68 м³ (рассчитывается автоматически в калькуляторе).
              </p>
            </div>

            <div className="mt-20 space-y-12">
              <div>
                <h2 className="text-5xl font-bold text-[#333] mb-4">Размер предоплаты и скидки</h2>
                <p className="text-xl text-[#555]">Чем выше предоплата, тем больше ваша выгода:</p>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0d6f6f] text-white">
                      <th className="py-6 px-8 text-left text-lg font-semibold">Предоплата</th>
                      <th className="py-6 px-8 text-left text-lg font-semibold">Скидка под брендом EvaGold</th>
                      <th className="py-6 px-8 text-left text-lg font-semibold">Скидка под вашим брендом</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e0e0e0] hover:bg-[#f5f5f5] transition-colors">
                      <td className="py-6 px-8 text-lg font-medium">10%</td>
                      <td className="py-6 px-8 text-lg">До 18%</td>
                      <td className="py-6 px-8 text-lg text-[#999]">—</td>
                    </tr>
                    <tr className="border-b border-[#e0e0e0] hover:bg-[#f5f5f5] transition-colors">
                      <td className="py-6 px-8 text-lg font-medium">50%</td>
                      <td className="py-6 px-8 text-lg">До 23%</td>
                      <td className="py-6 px-8 text-lg text-[#999]">—</td>
                    </tr>
                    <tr className="hover:bg-[#f5f5f5] transition-colors">
                      <td className="py-6 px-8 text-lg font-medium">100%</td>
                      <td className="py-6 px-8 text-lg font-bold text-[#0d6f6f]">До 27%</td>
                      <td className="py-6 px-8 text-lg font-bold text-[#0d6f6f]">До 25%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="bg-[#f8f8f8] border-none p-8">
                <h3 className="text-2xl font-bold text-[#333] mb-6">Почему скидка зависит от предоплаты?</h3>
                <div className="space-y-4 text-[#555]">
                  <div className="flex gap-4">
                    <div className="text-[#0d6f6f] font-bold text-2xl flex-shrink-0">/</div>
                    <p className="text-lg leading-relaxed">
                      Мы берем на себя логистические риски, которые могут достигать 25-30% от стоимости заказа.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#0d6f6f] font-bold text-2xl flex-shrink-0">/</div>
                    <p className="text-lg leading-relaxed">
                      Чем выше предоплата, тем стабильнее мы можем обеспечить поставку и предложить вам лучшую цену.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="absolute bottom-8 right-12">
              <div className="text-[#0d6f6f] text-sm">www.grandfayans.ru</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e6e1] py-20">
        <div className="container mx-auto px-12">
          <div className="relative">
            <div className="absolute top-6 right-12">
              <div className="text-4xl font-bold text-[#0d6f6f] tracking-wider">EvaGold</div>
            </div>

            <div className="space-y-16">
              <div>
                <h2 className="text-5xl font-bold text-[#333] mb-8">Брендирование</h2>
                <div className="grid grid-cols-2 gap-8 max-w-5xl">
                  <div className="flex gap-4">
                    <div className="text-[#0d6f6f] font-bold text-2xl flex-shrink-0">/</div>
                    <p className="text-lg text-[#555] leading-relaxed">
                      Под брендом EvaGold – максимальная скидка, мгновенная узнаваемость на рынке.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#0d6f6f] font-bold text-2xl flex-shrink-0">/</div>
                    <p className="text-lg text-[#555] leading-relaxed">
                      Под вашим брендом – помощь в разработке упаковки, маркетинговых материалов и продвижении.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <h2 className="text-5xl font-bold text-[#333]">Преимущества работы с нами</h2>

                <div className="grid grid-cols-2 gap-12">
                  <div className="flex gap-6 items-start">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <div className="text-center">
                        <Icon name="Calendar" size={32} className="text-[#0d6f6f] mx-auto mb-1" />
                        <div className="text-2xl font-bold text-[#0d6f6f]">25</div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#333] mb-3">25 ЛЕТ РАБОТЫ НА РЫНКЕ САНТЕХНИКИ</h3>
                      <ul className="space-y-2 text-[#555]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#0d6f6f] font-bold">•</span>
                          <span>Мы знаем все нюансы производства, логистики и таможенного оформления.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0d6f6f] font-bold">•</span>
                          <span>Гарантируем качество товара благодаря многоступенчатому контролю.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="Award" size={40} className="text-[#0d6f6f]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#333] mb-3">ТОПОВЫЙ АССОРТИМЕНТ</h3>
                      <ul className="space-y-2 text-[#555]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#0d6f6f] font-bold">•</span>
                          <span>Мы предлагаем только проверенные модели, которые хорошо продаются.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0d6f6f] font-bold">•</span>
                          <span>Никаких неликвидов – только прибыльные позиции.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="Handshake" size={40} className="text-[#0d6f6f]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#333] mb-3">ПОЛНАЯ МАРКЕТИНГОВАЯ ПОДДЕРЖКА</h3>
                      <ul className="space-y-2 text-[#555]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#0d6f6f] font-bold">•</span>
                          <span>Предоставление контента для сайтов, соцсетей, каталогов, рекламных материалов.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0d6f6f] font-bold">•</span>
                          <span>Организация выставочных стендов.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="Ship" size={40} className="text-[#0d6f6f]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#333] mb-3">СТАБИЛЬНАЯ ЛОГИСТИКА</h3>
                      <ul className="space-y-2 text-[#555]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#0d6f6f] font-bold">•</span>
                          <span>Даже в условиях нестабильных грузоперевозок мы обеспечиваем своевременные поставки.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12 mt-20">
                <div>
                  <h2 className="text-5xl font-bold text-[#333] mb-4">Как сделать заказ?</h2>
                </div>

                <div className="flex items-center justify-between max-w-6xl mx-auto">
                  <div className="text-center space-y-4 flex-1">
                    <div className="w-24 h-24 bg-[#0d6f6f] rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="List" size={36} className="text-white" />
                    </div>
                    <div className="font-bold text-lg text-[#333]">
                      <div className="text-[#0d6f6f] text-xl mb-2">1.</div>
                      Выберите один из<br />трех вариантов<br />ассортимента.
                    </div>
                  </div>

                  <div className="text-[#0d6f6f] text-4xl font-bold px-4">→</div>

                  <div className="text-center space-y-4 flex-1">
                    <div className="w-24 h-24 bg-[#0d6f6f] rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="Percent" size={36} className="text-white" />
                    </div>
                    <div className="font-bold text-lg text-[#333]">
                      <div className="text-[#0d6f6f] text-xl mb-2">2.</div>
                      Определитесь<br />с размером предоплаты<br />(10%, 50%, 100%).
                    </div>
                  </div>

                  <div className="text-[#0d6f6f] text-4xl font-bold px-4">→</div>

                  <div className="text-center space-y-4 flex-1">
                    <div className="w-24 h-24 bg-[#0d6f6f] rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="Tag" size={36} className="text-white" />
                    </div>
                    <div className="font-bold text-lg text-[#333]">
                      <div className="text-[#0d6f6f] text-xl mb-2">3.</div>
                      Укажите, нужен ли<br />ваш бренд на товаре.
                    </div>
                  </div>

                  <div className="text-[#0d6f6f] text-4xl font-bold px-4">→</div>

                  <div className="text-center space-y-4 flex-1">
                    <div className="w-24 h-24 bg-[#0d6f6f] rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="Calculator" size={36} className="text-white" />
                    </div>
                    <div className="font-bold text-lg text-[#333]">
                      <div className="text-[#0d6f6f] text-xl mb-2">4.</div>
                      Заполните<br />онлайн-калькулятор,<br />чтобы рассчитать объем<br />и стоимость.
                    </div>
                  </div>

                  <div className="text-[#0d6f6f] text-4xl font-bold px-4">→</div>

                  <div className="text-center space-y-4 flex-1">
                    <div className="w-24 h-24 bg-[#0d6f6f] rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="Lightbulb" size={36} className="text-white" />
                    </div>
                    <div className="font-bold text-lg text-[#333]">
                      <div className="text-[#0d6f6f] text-xl mb-2">5.</div>
                      Отправьте заявку, и мы<br />подготовим для вас<br />индивидуальное предложение.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-12">
              <div className="text-[#0d6f6f] text-sm">www.grandfayans.ru</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#e8e6e1] py-20">
        <div className="container mx-auto px-12">
          <div className="relative">
            <div className="absolute top-6 right-12">
              <div className="text-4xl font-bold text-[#0d6f6f] tracking-wider">EvaGold</div>
            </div>

            <div className="space-y-16">
              <h2 className="text-5xl font-bold text-[#333]">Заключение</h2>

              <div className="flex gap-4 max-w-4xl">
                <div className="text-[#0d6f6f] font-bold text-2xl flex-shrink-0">/</div>
                <p className="text-xl text-[#555] leading-relaxed">
                  Контейнерные закупки – это выгодно, безопасно и удобно. Вы получаете:
                </p>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
                  alt="Warehouse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              <div className="grid grid-cols-3 gap-8 -mt-48 relative z-10">
                <Card className="bg-white/95 backdrop-blur-sm border-none p-10 space-y-6 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-20 h-20 bg-[#0d6f6f]/10 rounded-full flex items-center justify-center">
                    <Icon name="Percent" size={40} className="text-[#0d6f6f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#333]">
                    МАКСИМАЛЬНЫЕ<br />СКИДКИ
                  </h3>
                </Card>

                <Card className="bg-white/95 backdrop-blur-sm border-none p-10 space-y-6 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-20 h-20 bg-[#0d6f6f]/10 rounded-full flex items-center justify-center">
                    <Icon name="ShieldCheck" size={40} className="text-[#0d6f6f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#333]">
                    ГАРАНТИРОВАННОЕ<br />КАЧЕСТВО
                  </h3>
                </Card>

                <Card className="bg-white/95 backdrop-blur-sm border-none p-10 space-y-6 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-20 h-20 bg-[#0d6f6f]/10 rounded-full flex items-center justify-center">
                    <Icon name="Settings" size={40} className="text-[#0d6f6f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#333]">
                    ПОДДЕРЖКУ<br />НА ВСЕХ ЭТАПАХ
                  </h3>
                </Card>
              </div>

              <div className="text-center space-y-8 pt-12">
                <h3 className="text-3xl font-bold text-[#333]">
                  Готовы обсудить детали? Свяжитесь с нами прямо сейчас!
                </h3>
                
                <div className="inline-block">
                  <a 
                    href="http://www.grandfayans.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#f59e42] hover:bg-[#e08a2e] text-white font-bold text-xl px-12 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    Сайт: www.grandfayans.ru
                  </a>
                </div>

                <p className="text-lg text-[#666] pt-8">
                  P.S. Ограниченное предложение – закажите контейнер сейчас<br />
                  и зафиксируйте лучшую цену!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-12">
          <div className="text-[#0d6f6f] text-sm">www.grandfayans.ru</div>
        </div>
      </section>

      <section id="contact-form" className="bg-[#0d6f6f] py-20">
        <div className="container mx-auto px-12">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white p-12 space-y-8 shadow-2xl">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-[#333]">
                  Оставьте заявку
                </h2>
                <p className="text-lg text-[#666]">
                  Получите персональное коммерческое предложение в течение 1 рабочего дня
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-[#333]">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="h-14 text-lg border-2 border-[#ddd] focus:border-[#0d6f6f]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-[#333]">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="h-14 text-lg border-2 border-[#ddd] focus:border-[#0d6f6f]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#333]">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@company.ru"
                    className="h-14 text-lg border-2 border-[#ddd] focus:border-[#0d6f6f]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#0d6f6f] hover:bg-[#0a5555] text-white text-xl h-16 font-bold shadow-lg"
                >
                  Получить коммерческое предложение
                </Button>

                <p className="text-xs text-center text-[#999] pt-4">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#0d6f6f] text-white py-8">
        <div className="container mx-auto px-12 text-center">
          <div className="text-2xl font-bold mb-4 tracking-wider">EvaGold</div>
          <p className="text-white/80 mb-2">25 лет на рынке сантехники</p>
          <p className="text-sm text-white/60">© 2025 EvaGold. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
