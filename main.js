const target = document.getElementById("target");
const input = document.getElementById("input");

input.addEventListener("keyup", () => {
  target.style.backgroundColor = input.value;
});
