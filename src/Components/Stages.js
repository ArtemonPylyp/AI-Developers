import React from "react";

import "/Users/artempilipenko/Desktop/aidevelopers/src/css/stages.css";
import { TbDeviceAnalytics } from "react-icons/tb";
import { FaFileContract } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { MdSecurityUpdateGood } from "react-icons/md";

function Stages() {
  return (
    <div id="stages" className="stages text-center ">
      <div className="container">
        <div className=" col-md-offset-1 section-title-st">
          <h2 className="section-title-2-st">ЕТАПИ ВИРОБНИЦТВА</h2>
          <p className="stages-p">Ми відповідально відносимось до кожного етапу нашої роботи</p>
        </div>
        <div className="row mainPart">
          <div className="col-xs-6 col-md-3">
            <TbDeviceAnalytics className="fa" />
            <h3 className="h3-text">Аналіз задачі</h3>
            <p className="p-text">
              Ми детально вивчаємо технічне завдання та аналізуємо сферу
              діяльності.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <FaFileContract className="fa" />
            <h3 className="h3-text">Підписання договору</h3>
            <p className="p-text">
              Підписання договору не є обов'язковим, проте, якщо клієнту це
              необхідно, ми без проблем надамо йому цю можливість.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <HiCode className="fa" />
            <h3 className="h3-text">Розробка продукту</h3>
            <p className="p-text">
              Найголовніший етап, час розробки якого триває від 7 робочих днів.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <MdSecurityUpdateGood className="fa" />
            <h3 className="h3-text">Презентація роботи</h3>
            <p className="p-text">
              Перед презентацією, розроблений сайт або додаток, завжди проходить
              тестування, тому ми завжди впевнені в якості свого продукту.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stages;
