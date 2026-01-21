import Icon from "@/components/ui/icon";

export function Notifications() {
  return (
    <section id="notifications" className="py-24 md:py-32 bg-foreground/[0.02]">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sentient mb-6">
                Умные <i className="font-light">уведомления</i>
              </h2>
              <p className="font-mono text-base text-foreground/60 mb-8">
                Никогда не пропустишь урок благодаря системе напоминаний с гибкой настройкой времени
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sentient text-lg mb-2">За 5 минут до урока</h3>
                    <p className="font-mono text-sm text-foreground/60">
                      «Через 5 минут у вас пройдет урок математики в 307 кабинете»
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="Bell" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sentient text-lg mb-2">В момент начала</h3>
                    <p className="font-mono text-sm text-foreground/60">
                      Уведомление приходит ровно когда урок начинается
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="CheckCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sentient text-lg mb-2">После окончания</h3>
                    <p className="font-mono text-sm text-foreground/60">
                      Показывает детали следующего урока: время, кабинет, предмет
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="Volume2" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sentient text-lg mb-2">Уникальный звук</h3>
                    <p className="font-mono text-sm text-foreground/60">
                      Отдельный звук для уведомлений из приложения — сразу понятно, что это расписание
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-foreground/5 rounded-2xl p-8 border border-foreground/10">
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border border-foreground/10 shadow-sm">
                    <div className="flex items-start gap-3">
                      <Icon name="Calendar" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-mono text-xs text-foreground/60 mb-1">Через 5 минут</p>
                        <p className="font-sentient text-sm">Математика • 307 каб.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background p-4 rounded-lg border border-foreground/10 shadow-sm">
                    <div className="flex items-start gap-3">
                      <Icon name="Bell" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-mono text-xs text-foreground/60 mb-1">Сейчас</p>
                        <p className="font-sentient text-sm">Урок начался</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background p-4 rounded-lg border border-foreground/10 shadow-sm">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-mono text-xs text-foreground/60 mb-1">Урок окончен</p>
                        <p className="font-sentient text-sm mb-2">Следующий: Физика</p>
                        <p className="font-mono text-xs text-foreground/60">9:00 • 204 каб. • через 20 мин</p>
                      </div>
                    </div>
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
