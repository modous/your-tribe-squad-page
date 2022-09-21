const cardElement = document.querySelector(".js_card");
const nameElement = document.querySelector(".js_name");
const imagelement = document.querySelector(".js_image");
const linkElement = document.querySelector(".js_card a");

document.querySelectorAll(".js_bin li").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const name = event.target.innerText;
    const link = event.target.closest("a").href;

    if (cardElement.classList.contains("-animate")) {
      cardElement.classList.remove("-animate");

      setTimeout(() => {
        updateCard(name, link);
      }, 300);

      setTimeout(() => {
        cardElement.classList.add("-animate");
      }, 600);

      return;
    }

    updateCard(name, link);

    setTimeout(() => {
      cardElement.classList.add("-animate");
    }, 100);
  });
});

function updateCard(name, link) {
  nameElement.innerText = name;

  imagelement.src = `./assets/${name.toLowerCase()}.webp`;
  imagelement.alt = `Portret van ${name}`;
  linkElement.href = link;
}
