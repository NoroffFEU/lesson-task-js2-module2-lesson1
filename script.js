const games = [
  { id: 324, name: "Great game", rating: 5.0 },
  { id: 124, name: "Ok game", rating: 3.0 },
  { id: 678, name: "Meh game", rating: 2.5 },
  { id: 28, name: "Terrible game", rating: 1.0 },
  { id: 4, name: "Mediocre game", rating: 3.0 },
];
const container = document.querySelector(".container");

games.forEach(function (list) {
  container.innerHTML += `<li>Name: ${list.name} <br> Rating: ${list.rating}</li>`;
});

const items = document.querySelectorAll("li");

items.forEach(function (listItem) {
  listItem.addEventListener("click", addClass);
});

function addClass(event) {
  event.target.classList.toggle("played");
}
