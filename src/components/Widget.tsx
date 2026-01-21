import Icon from "@/components/ui/icon";

export function Widget() {
  return (
    <section id="widget" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-3xl p-8 border border-foreground/10 max-w-sm mx-auto">
                <div className="bg-background/95 backdrop-blur rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="text-center pb-3 border-b border-foreground/10">
                      <p className="font-mono text-xs text-foreground/40 mb-1">Прошедший урок</p>
                      <div className="flex items-center justify-center gap-2 text-foreground/40">
                        <Icon name="CheckCircle" size={14} />
                        <span className="font-mono text-xs">История • 8:00-8:40 • 305 каб.</span>
                      </div>
                    </div>

                    <div className="text-center py-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="font-mono text-xs text-primary/60 mb-2">Сейчас идет</p>
                      <h3 className="font-sentient text-2xl mb-2">Математика</h3>
                      <div className="flex items-center justify-center gap-2 text-foreground/80">
                        <Icon name="Clock" size={16} />
                        <span className="font-mono text-sm">8:50-9:30</span>
                        <span className="text-foreground/40">•</span>
                        <Icon name="MapPin" size={16} />
                        <span className="font-mono text-sm">307 каб.</span>
                      </div>
                    </div>

                    <div className="text-center pt-3 border-t border-foreground/10">
                      <p className="font-mono text-xs text-foreground/40 mb-1">Следующий урок</p>
                      <div className="flex items-center justify-center gap-2 text-foreground/40">
                        <Icon name="ArrowRight" size={14} />
                        <span className="font-mono text-xs">Физика • 9:40-10:20 • 204 каб.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-sentient mb-6">
                Виджет на <i className="font-light">главный</i> экран
              </h2>
              <p className="font-mono text-base text-foreground/60 mb-8">
                Всё расписание перед глазами без открытия приложения — прямо на домашнем экране телефона
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="Eye" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sentient text-lg mb-2">Быстрый обзор</h3>
                    <p className="font-mono text-sm text-foreground/60">
                      Серым текстом показан прошедший урок, крупно — текущий, внизу — следующий
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="RefreshCw" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sentient text-lg mb-2">Автообновление</h3>
                    <p className="font-mono text-sm text-foreground/60">
                      Виджет автоматически переключается между уроками — текущий становится прошедшим, следующий — текущим
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="Info" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sentient text-lg mb-2">Полная информация</h3>
                    <p className="font-mono text-sm text-foreground/60">
                      Для каждого урока отображается время проведения, номер кабинета и название предмета
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
