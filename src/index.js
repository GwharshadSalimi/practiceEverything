function showTime(event) {
  let placeElement = document.querySelector("#place1");
  placeElement.classList.remove("text");

  if (event.target.value === "istanbul") {
    placeElement.innerHTML = ` ${moment()
      .tz("Europe/Istanbul")
      .format("dddd, MMMM D, YYYY h:mm A")} 🏙️`;
  }

  if (event.target.value === "kabul") {
    placeElement.innerHTML = ` ${moment()
      .tz("Asia/Kabul")
      .format("dddd, MMMM D, YYYY h:mm A")} 😆`;
  }

  if (event.target.value === "gaza") {
    placeElement.innerHTML = ` ${moment()
      .tz("Asia/Gaza")
      .format("dddd, MMMM D, YYYY h:mm A")} 😍`;
  }

  if (event.target.value === "dubai") {
    placeElement.innerHTML = ` ${moment()
      .tz("Asia/Dubai")
      .format("dddd, MMMM D, YYYY h:mm A")} 🫠`;
  }
}

let timElement = document.querySelector("#timeZone");
timElement.addEventListener("change", showTime);
