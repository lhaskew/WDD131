document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");

  menu.classList.add("hide");

  function toggleMenu() {
    menu.classList.toggle("hide");
  }

  menuButton.addEventListener("click", toggleMenu);

  function handleResize() {
    if (window.innerWidth >= 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);
});

function viewerTemplate(imgSrc, altText) {
  return `
  <div class="viewer active">
      <button class="close-viewer">X</button>
      <img src="${imgSrc}" alt="${altText}">
  </div>`;
}

function viewHandler(event) {
  if (event.target.tagName === 'IMG') {
      const clickedImg = event.target;
      const imgSrc = clickedImg.src.replace("-sm.jpeg", "-full.jpeg");
      const altText = clickedImg.alt;

      if (document.querySelector('.viewer')) return;

      document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, altText));

      const viewer = document.querySelector('.viewer');
      const closeButton = document.querySelector('.close-viewer');

      closeButton.addEventListener('click', closeViewer);
      viewer.addEventListener('click', (e) => {
        if (e.target === viewer) closeViewer();
      });
      document.addEventListener('keydown', handleKeyPress);
  }
}

function closeViewer() {
  const viewer = document.querySelector('.viewer');
  if (viewer) {
    viewer.remove();
    document.removeEventListener('keydown', handleKeyPress);
  }
}

function handleKeyPress(event) {
  if (event.key === "Escape") {
    closeViewer();
  }
}

document.querySelector('.gallery').addEventListener('click', viewHandler);