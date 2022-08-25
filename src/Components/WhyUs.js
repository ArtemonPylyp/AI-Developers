import React from "react";

import "/Users/artempilipenko/Desktop/aidevelopers/src/css/team.css";
import image from "/Users/artempilipenko/Desktop/aidevelopers/src/assets/Снимок экрана 2022-08-05 в 13.59.47.png";

function WhyUs() {
  return (
    <div id="team" className="text-center team">
      <div className="container">
        <div className="col-md-offset-1 section-title-main">
          <h2 className="section-title-2">НАША КОМАНДА</h2>
          <p className="text-dark">
            Ми команда крутих, сучасних, українських спеціалістів, які точно
            зможуть допомогти ТОБІ реалізувати всі свої ідеї.
          </p>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail bloc-des">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                alt="Фото розробника ПО"
                className="team-img"
              />
              <div className="caption">
                <h4 className="name">Артем</h4>
                <p className="description">Розробник ПО</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail bloc-des ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/147/147140.png"
                alt="Фото верстальщика сайтів"
                className="team-img"
              />
              <div className="caption">
                <h4 className="name">Іван</h4>
                <p className="description">Верстальщик сайтів</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail bloc-des ">
              <img
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Images.png"
                alt="Фото дизайнера"
                className="team-img"
              />
              <div className="caption">
                <h4 className="name">Каріна</h4>
                <p className="description">Дизайнер</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail bloc-des ">
              <img
                src="https://www.akbope.kz/images/teachers/19335047335ca475ee4c0e6.png"
                alt="Фото маркетолога"
                className="team-img"
              />
              <div className="caption">
                <h4 className="name">Яна</h4>
                <p className="description">Маркетолог</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
