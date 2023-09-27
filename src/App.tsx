import React from 'react';
import './App.css';
import Section from "./components/Section";
import SectionItem from "./components/SectionItem";
import SectionItemWeather from "./components/SectionItemWeather";
import SectionItemEfir from "./components/SectionItemEfir";
import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
export default function App() {
  const sectionsTop = [
    {
      title: "Сейчас в Сми",
      items: [
        {
          itemTitle: "всем дали денег!",
          
          icon:  "https://fontawesomeicons.com/lib/svg/codefactor.svg",
          url: "http://avito.ru"
        },
        {
          itemTitle: "всем дали денег!",
          
          icon:  "https://fontawesomeicons.com/lib/svg/codefactor.svg",
          url: "http://avito.ru"
        },
        {
          itemTitle: "всем дали денег!",
          icon:  "https://fontawesomeicons.com/lib/svg/codefactor.svg",
          url: "http://avito.ru"
        }
      ],
      isActive: true
    },
    {
      title: "В Германии",
      items: [
        {
          itemTitle: "всем дали денег!",
          icon: "https://fontawesomeicons.com/lib/svg/codefactor.svg",
          url: "http://avito.ru"
        },
        {
          itemTitle: "всем дали денег!",
          icon:  "https://fontawesomeicons.com/lib/svg/codefactor.svg",
          url: "http://avito.ru"
        }
      ],
      isActive: false
    },
    {
      title: "Рекомендуем",
      items: [
        {
          itemTitle: "всем дали денег!",
          icon:  "https://fontawesomeicons.com/lib/svg/codefactor.svg",
          url: "http://avito.ru"
        },
        {
          itemTitle: "всем дали денег!",
          icon:  "https://fontawesomeicons.com/lib/svg/codefactor.svg",
          url: "http://avito.ru"
        },
        {
          itemTitle: "всем дали денег!",
          icon:  "https://fontawesomeicons.com/lib/svg/codefactor.svg",
          url: "http://avito.ru"
        }
      ],
      isActive: false
    }
  ];
  const sectionsBottom = [
    {
      title: "Погода",
      items: [
        {
          itemTitle: "Утром +17, днем +20",
          itemType: "rainy",
          url: "http://avito.ru"
        }
      ],
      isActive: true,
      type: "weather"
    },
    {
      title: "Карта Германии",
      items: [
        {
          itemTitle: "Расписания",
          url: "http://avito.ru"
        }
      ],
      isActive: true
    },
    {
      title: "Эфир",
      items: [
        {
          itemTitle: "Управление как искуство",
          url: "http://avito.ru"
        },
        {
          itemTitle: "Ночь. Мир в это время",
          url: "http://avito.ru"
        },
        {
          itemTitle: "Андрей Возн...",
          url: "http://avito.ru"
        }
      ],
      isActive: true,
      type: "efir"
    },
    {
      title: "Посещаемое",
      items: [
        {
          itemTitle: "Недвижимость - о сталинках",
          url: "http://avito.ru"
        },
        {
          itemTitle: "Маркет - люстры и светильники",
          url: "http://avito.ru"
        },
        {
          itemTitle: "всем дали денег!",
          url: "http://avito.ru"
        },
        {
          itemTitle: "всем дали денег!",
          url: "http://avito.ru"
        }
      ],
      isActive: true
    }
  ];
  const tags = [
    { title: "Видео", url: "https://avito.ru" },
    { title: "Картинки", url: "https://avito.ru" },
    { title: "Новости", url: "https://avito.ru" },
    { title: "Карты", url: "https://avito.ru" },
    { title: "Маркет", url: "https://avito.ru" },
    { title: "Переводчик", url: "https://avito.ru" },
    { title: "Эфир", url: "https://avito.ru" },
    { title: "ещё", url: "https://avito.ru" }
  ];
  return (
    <div className="App">
      <div className="sections-container">
        {sectionsTop.map((section) => (
          <Section title={section.title} isActive={section.isActive}>
            {section.items.map((el) => (
              <SectionItem item={el} />
            ))}
          </Section>
        ))}
      </div>
      <SearchForm items={tags} label="фаза луны сегодня" />
      <Banner
        url="http://avito.ru"
        image="https://ru.pinterest.com/pin/616148792757000490/"
      />
      <div className="sections-container">
        {sectionsBottom.map((section) => (
          <Section title={section.title} isActive={section.isActive}>
            {section.type === "weather" &&
              section.items.map((el) => (
                <SectionItemWeather type="rainy">
                  <SectionItem item={el} />
                </SectionItemWeather>
              ))}
            {section.type === "efir" &&
              section.items.map((el) => (
                <SectionItemEfir >
                  <SectionItem item={el} />
                </SectionItemEfir>
              ))}
              {section.items.map((el) => (
                  <SectionItem item={el} />
              ))}
          </Section>
        ))}
      </div>
    </div>
  );
}
