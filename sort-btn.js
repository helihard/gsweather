export const container = document.querySelector("#blanket");
const sortBtn = document.querySelector("#sort-btn");
sortBtn.innerText = "äldst först";

sortBtn.addEventListener("click", function () {
  container.classList.toggle("reverse");
  sortBtn.innerText = "nyast först";
  container.classList.contains("reverse") ? sortBtn.innerText = "nyast först" : sortBtn.innerText = "äldst först";
});
