import "../scss/main.scss";

const btn = document.querySelector("#confettiBtn");
const burst = document.querySelector("#burst");
const tile = document.querySelector("#tile");

btn?.addEventListener("click", () => {
  burst.classList.remove("is-active");
  void burst.offsetWidth; // reflow så animation kan triggas igen
  burst.classList.add("is-active");
});

function toggleTile() {
  tile.classList.toggle("is-flip");
}

tile?.addEventListener("click", toggleTile);
tile?.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") toggleTile();
});
