import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "/Users/artempilipenko/Desktop/aidevelopers/src/css/footer.css";
import jQuery from "jquery";
import $ from "jquery";

function Footer() {
  const success = () => {
    $("#sendButton")
      .text("Дані були успішно відправлено ✓")
      .addClass("btn-success-my")
      .prop("disabled", true);
  };
  const formValue = (event) => {
    const form = document.getElementById("sentMessage");
    event.preventDefault();
    const name = form.querySelector('[name="name"]'),
      phone = form.querySelector('[name="phone"]'),
      message = form.querySelector('[name="message"]');
    if (name.value === "") {
      console.log("Ви не ввели данні!");
      $("#input-name").addClass("input-form");
    } else if (phone.value === "") {
      console.log("Ви не ввели данні!");
      $("#input-phone").addClass("input-form");
    } else {
      $("#input-name").removeClass("input-form");
      $("#input-phone").removeClass("input-form");
      const values = {
        name: name.value,
        phone: phone.value,
        message: message.value,
      };
      success();

      console.log(values);

      form.reset();
    }
  };
  return (
    <footer id="footer">
      <div className="margin">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title-footer">
              <h2 className="contact-h2">
                Сподобався сайт?) <br />
                Зв'яжіться з нами!
              </h2>
              <p>
                Будь ласка, заповніть форму нижче, і ми зв’яжемося з вами
                якомога швидше.
              </p>
            </div>
            <form id="sentMessage" className="contactForm">
              <div className="">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="input-name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Ім'я*"
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-group">
                    <input
                      id="input-phone"
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Телефон*"
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Побажання"
                  required=""
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button
                id="sendButton"
                type="submit"
                onClick={formValue}
                className="btn btn-primary btn-custom-2 btn-lg"
              >
                Надіслати
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1  ">
          <div className="contact-item">
            <h3>Контакти</h3>
            <p>
              <span>
                <i className=" fa-map-marker"></i> Адресса
              </span>
              Оболонський проспект, 1Б, Київ, 04205
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className=" fa-phone"></i> Телефон
              </span>{" "}
              +380 (67) 612-16-62
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className=" fa-envelope-o"></i> Email
              </span>{" "}
              aidevelopersua@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 network-info">
        <div className="row ">
          <div className="social">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/__ai_developers__/"
                  target="_blank"
                >
                  <AiFillInstagram className="fa-footer" />
                </a>
              </li>
              <li>
                <a href="https://t.me/Van_Vovich" target="_blank">
                  <BsTelegram className="fa-footer" />
                </a>
              </li>
              <li>
                <a href="mailto:aidevelopersua@gmail.com">
                  <MdEmail className="fa-footer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
