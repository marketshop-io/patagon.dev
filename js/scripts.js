
const buttons = document.querySelectorAll(".slide_btn");
const slides = document.getElementById("slides");

buttons.forEach((el) =>
  el.addEventListener("click", (event) => {
    console.log(event.target)
    var d = event.target.getAttribute("data-slide")
    console.log(d)
    slides.classList.remove("s1", "s2", "s3")
    slides.classList.add(d)
    buttons.forEach((el) => el.classList.remove("active"))
    event.target.classList.add("active")
  }, false)
);