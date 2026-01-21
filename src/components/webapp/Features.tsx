import Icon from "@/components/ui/icon";

export function Features() {
  const features = [
    {
      icon: "Calendar",
      title: "Гибкое расписание",
      description: "Настрой расписание на всю неделю с точным временем начала и конца каждого урока. Добавляй, убирай или меняй уроки в любой момент."
    },
    {
      icon: "MapPin",
      title: "Кабинеты и места",
      description: "Укажи для каждого урока номер кабинета или место проведения — больше не нужно запоминать, где какой предмет."
    },
    {
      icon: "Repeat",
      title: "Повторение недель",
      description: "Расписание автоматически повторяется каждую неделю. Один раз настроил — пользуешься постоянно."
    },
    {
      icon: "Settings",
      title: "Полный контроль",
      description: "Отключай уроки на конкретный день, меняй время проведения или полностью редактируй любой элемент расписания."
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient mb-4">
            Всё для <i className="font-light">твоего</i> расписания
          </h2>
          <p className="font-mono text-sm md:text-base text-foreground/60 max-w-[540px] mx-auto">
            Гибкая настройка под любую школу и любой график занятий
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 md:p-8 border border-foreground/10 rounded-lg hover:border-foreground/20 transition-colors duration-300"
            >
              <div className="mb-4">
                <Icon name={feature.icon} size={32} className="text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-sentient mb-3">
                {feature.title}
              </h3>
              <p className="font-mono text-sm text-foreground/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
