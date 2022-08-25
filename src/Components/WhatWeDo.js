import React from "react";
import "/Users/artempilipenko/Desktop/aidevelopers/src/css/main.css";
import "/Users/artempilipenko/Desktop/aidevelopers/src/css/whatWeDo.css";
import { IoLogoApple } from "react-icons/io";
import { IoLogoAndroid } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TbAppWindow } from "react-icons/tb";
import { FcAdvertising } from "react-icons/fc";
import { MdOutlineDesignServices } from "react-icons/md";

function WhatWeDo() {
  return (
    <div id="services" className="text-center services">
      <div className="container">
        <div className="section-title-w">
          <h2 className="h2-services">НАШІ ПОСЛУГИ</h2>
          <p className="p-services">
            Нижче ви можете ознайомитись з усіма нашими послугами.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 bloc">
            <CgWebsite className="icon" />
            <div className="service-desc">
              <h3>Розробка сайтів</h3>
              <p>
                Сайт потрібен, щоб створити репутацію, знайти нових клієнтів,
                але найголовніше - <strong>ЗБІЛЬШИТИ ПРОДАЖІ</strong>.
              </p>
            </div>
          </div>
          <div className="col-md-4 bloc">
            <IoLogoAndroid className="icon" />
            <div className="service-desc">
              <h3>Розробка додатків під Android</h3>
              <p>
                Передбачає розмішення ваших додатків в Play market. Розробка
                мобільного додатка під Android дає можливість реалізувати вашу
                ідею і поширити її на широку аудиторію.
              </p>
            </div>
          </div>
          <div className="col-md-4 bloc">
            <IoLogoApple className="icon" />
            <div className="service-desc">
              <h3>Розробка додатків під IOS</h3>
              <p>
                iOS – одна з найпопулярніших платформ у світі. Передбачає
                розмішення ваших додатків в App Store. Платформа має велику
                кількість переваг: ергономічний інтерфейс, зручну файлову
                систему, посилену безпеку
              </p>
            </div>
          </div>
          <div className="col-md-4 bloc">
            <TbAppWindow className="icon" />
            <div className="service-desc">
              <h3>Розробка Web-додатків</h3>
              <p>
                Веб-додатки працюють на мобільних і десктопах, дозволяючи
                охопити максимально широку аудиторію. Завдяки автоматизації
                внутрішніх процесів впровадження веб-додатків зробить ваш бізнес
                більш ефективним.
              </p>
            </div>
          </div>
          <div className="col-md-4 bloc">
            <FcAdvertising className="icon" />
            <div className="service-desc">
              <h3>Просування сайту</h3>
              <p>
                Просування сайту — комплекс дій для забезпечення високих позицій
                ресурсу в пошукових системах з метою підвищення відвідуваності
                сайту цільовою аудиторією.
              </p>
            </div>
          </div>
          <div className="col-md-4 bloc">
            <MdOutlineDesignServices className="icon" />
            <div className="service-desc">
              <h3>Створення індивідуального лого</h3>
              <p>
                Логотип – це візитна картка компанії, за якою її
                дізнаватимуться. Креативне лого викликає в аудиторії певні
                спогади, асоціації та емоції.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
