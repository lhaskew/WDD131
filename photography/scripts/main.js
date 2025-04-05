
const reviews = [
    {
      text: "Lucy captured our special day better than we could have imagined!",
      author: "– Emily & John"
    },
    {
      text: "Lucy not only made us love our engagement photos, but we also can't stop looking at them!",
      author: "– Hannah & Cameron"
    },
    {
      text: "She made my vision come to life! So grateful for the photos we receieved!!",
      author: "– Abbie Packer"
    }
  ];
  
  let reviewIndex = 0;
  const reviewText = document.getElementById("review-text");
  const reviewAuthor = document.getElementById("review-author");
  
  function rotateReview() {
    reviewIndex = (reviewIndex + 1) % reviews.length;
    reviewText.textContent = reviews[reviewIndex].text;
    reviewAuthor.textContent = reviews[reviewIndex].author;
  }
  
  if (reviewText && reviewAuthor) {
    setInterval(rotateReview, 5000);
  }
  
  const portfolios = [
    {
      title: "Baby Photos",
      images: ["photos/IMG_4962.jpg", "photos/IMG_4984.jpg"]
    },
    {
      title: "Portraits",
      images: ["photos/IMG_4864.jpg", "photos/IMG_4965.jpg"]
    }
  ];
  
  const grid = document.getElementById("portfolio-grid");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-image");
  const closeModal = document.getElementById("closeModal");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  
  let currentGallery = [];
  let currentIndex = 0;
  
  function openModal(gallery, index = 0) {
    currentGallery = gallery;
    currentIndex = index;
    modal.classList.remove("hidden");
    updateModalImage();
  }
  
  function updateModalImage() {
    modalImg.src = currentGallery[currentIndex];
  }
  
  if (grid) {
    portfolios.forEach((portfolio) => {
      const card = document.createElement("div");
      card.classList.add("portfolio-card");
  
      const img = document.createElement("img");
      img.src = portfolio.images[0];
      img.alt = portfolio.title;
      img.addEventListener("click", () => openModal(portfolio.images));
  
      const title = document.createElement("h3");
      title.textContent = portfolio.title;
      title.classList.add("portfolio-title");
  
      card.appendChild(img);
      card.appendChild(title);
      grid.appendChild(card);
    });
  }
  
  
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = currentIndex === 0 ? currentGallery.length - 1 : currentIndex - 1;
      updateModalImage();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % currentGallery.length;
      updateModalImage();
    });
  }
  