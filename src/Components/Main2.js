import React from "react";
import "/Users/artempilipenko/Desktop/aidevelopers/src/css/main2.css";

function Main2() {
  return (
    <header id="header">
      <div class="intro">
        <div class="overlay">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  РОЗРОБКА САЙТІВ ПІД КЛЮЧ<span></span>
                </h1>
                <p>
                  {" "}
                  Розробляємо cайти, додатки під ключ. Ми створюємо послуги, які
                  допомагають людям вести свій бізнес і вдосконалювати системи
                  управління.
                </p>
                <div className="container">
                  <a
                    href="#footer"
                    className="btn btn-success me-2 btn-lg first-btn-anim"
                  >
                    Замовити дзвінок
                  </a>
                  <a
                    href="#about-us"
                    className="btn btn-outline-warning btn-lg first-btn-anim"
                  >
                    Детальніше
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Main2;
