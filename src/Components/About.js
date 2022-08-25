import React from "react";
import "/Users/artempilipenko/Desktop/aidevelopers/src/css/main.css";
import "/Users/artempilipenko/Desktop/aidevelopers/src/css/about.css";
function About() {
  return (
    <div id="about-us" className="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-xl-6">
            <img
              src="https://react-landing-page-template.herokuapp.com/img/about.jpg"
              className="img-responsive about-img"
              alt="Створюємо сайти та додатки під ключ"
            />
          </div>
          <div className="col-xs-12 col-xl-6">
            <div className="">
              <h2 className="about-h2">Хто ми?</h2>
              <p className="about-p">
                Ми молода українська компанія по розробці сайтів та додатків.
                Нашою головною метою є надання якісних послуг за встановлений
                проміжок часу. Ми цінуємо нашу репутацію та час наших клієнтів,
                тому зробимо все можливе для створення якісного сайту/додатку ,
                який стане лідером серед конкурентів.
              </p>
              <h3 className="about-h3">Чому обирають саме нас?</h3>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul className="ul-list">
                    <li className="about-text">Якість</li>
                    <li className="about-text">Швидкість</li>
                    <li className="about-text">Бажання</li>
                    <li className="about-text">Підтримка 24/7</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul className="ul-list">
                    <li className="about-text">Досвід</li>
                    <li className="about-text">Відповідальність</li>
                    <li className="about-text">Репутація</li>
                    <li className="about-text">Ціни</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
