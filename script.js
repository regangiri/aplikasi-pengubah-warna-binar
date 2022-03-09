const textColor = document.querySelector(".text");
const backgroundColor = document.querySelector(".background");

textColor.addEventListener("change", (e) => {
  document.body.style.color = textColor.value;
});
backgroundColor.addEventListener("change", (e) => {
  document.body.style.backgroundColor = backgroundColor.value;
});
