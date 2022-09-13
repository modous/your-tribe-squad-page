// Retreiving all card elemenets.
const cardElement = document.querySelector(".js_card");
const nameElement = document.querySelector(".js_name");
const imagelement = document.querySelector(".js_image");

// Looping through all li's and adding a click event listener.
document.querySelectorAll(".js_bin li").forEach((element) => {
  element.addEventListener("click", (event) => {
    const name = event.target.innerText;

    // If card is already visible, remove the animation and back after 1 second. Then return.
    if (cardElement.classList.contains("-animate")) {
      cardElement.classList.remove("-animate");

      setTimeout(() => {
        updateCard(name);
      }, 300);

      setTimeout(() => {
        cardElement.classList.add("-animate");
      }, 1000);

      return;
    }

    updateCard(name);

    setTimeout(() => {
      cardElement.classList.add("-animate");
    }, 100);
  });
});

function updateCard(name) {
  // Update card text with new name.
  nameElement.innerText = name;

  // Update card image source and alt text.
  imagelement.src = `./assets/${name.toLowerCase()}.webp`;
  imagelement.alt = `Portret van ${name}`;
}
