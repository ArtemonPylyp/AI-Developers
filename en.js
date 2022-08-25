function formValue(event) {
  const form = document.getElementById("sentMessage");
  event.preventDefault();
  const name = form.querySelector('[name="name"]'),
    phone = form.querySelector('[name="phone"]'),
    message = form.querySelector('[name="message"]');
  if (name.value === "") {
    $("#input-name").addClass("input-form");
  } else if (phone.value === "") {
    $("#input-phone").addClass("input-form");
  } else {
    $("#input-name").removeClass("input-form");
    $("#input-phone").removeClass("input-form");
    const values = {
      name: name.value,
      phone: phone.value,
      message: message.value,
    };
    $("#sendButton")
      .text("The data was sent successfully✓")
      .addClass("btn-success-my")
      .prop("disabled", true);

    console.log(values);

    form.reset();
  }
}
