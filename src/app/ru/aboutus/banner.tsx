import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="head-banner">
        <div className="head-banner__back">
          <picture>
            <source media="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)" srcSet="8.png" />
            <img src="8.png" alt="о фонде" />
          </picture>
        </div>
        <div className="head-banner__container container">
          <h1 className="head-banner__title title" style={{ backgroundColor: '#008cae' }}>МИССИЯ</h1>
          <div className="head-banner__text">
            <p>Содействие в укреплении конкурентоспособности СМИ и медиа Казахстана</p>
          </div>
        </div>
      </div>
      <section className="about-us">
        <div className="container">
          <div className="about-us__grid">
            <div className="about-us__content article-area">
              <strong className="ideologystrong" style={{ color: '#008cae', fontWeight: 700 }}>ИДЕОЛОГИЯ</strong>
              <strong>ГЛАВНЫЙ ОРИЕНТИР ФОНДА – ЭТО ВОЗМОЖНОСТЬ ОТКРЫТИЯ НОВЫХ ТАЛАНТОВ</strong>
              <p>Тех, кто способен в будущем генерировать медиа продукты высшего качества, выходя за рамки своего творческого и профессионального потенциала. MDQ создаст для каждого благоприятные условия для развития уникального контента, включая финансирование, PR, техническое оснащение и нетворкинг с успешными игроками рынка</p>
            </div>
            <div className="about-us__sidebar">
              <strong style={{ margin: '30px 0', display: 'block' }}>
                <span className="doc-block__title" style={{ color: '#008cae', fontWeight: 700 }}>Наша цель</span>– ЭТО РАЗРАБОТКА СТРАТЕГИЙ И КОМПЛЕКСНОГО ПОДХОДА ДЛЯ РАСШИРЕНИЯ ВОЗМОЖНОСТЕЙ КАЗАХСТАНСКИХ СМИ И МЕДИА ОТРАСЛИ В DIGITAL-ПРОСТРАНСТВЕ</strong>
              <ul style={{ paddingLeft: '25px' }}>
                <li className="listitem">Охват и развитие новых направлений работы</li>
                <li className="listitem">Повышение квалификации журналистов</li>
                <li className="listitem">Поиск новых талантов</li>
                <li className="listitem">Повышение качества медийного контента</li>
                <li className="listitem">Сотрудничество с лидерами рынка</li>
              </ul>
            </div>
            
        </div>
        
        </div>
        
        </section>
        </div>)};
