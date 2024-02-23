export const container = document.querySelector("#blanket");
const sortBtn = document.querySelector("#sort-btn");
sortBtn.innerText = "nyast först";

sortBtn.addEventListener("click", function () {
  container.classList.toggle("reverse");
  sortBtn.innerText = "äldst först";
  container.classList.contains("reverse") ? sortBtn.innerText = "äldst först" : sortBtn.innerText = "nyast först";
});
