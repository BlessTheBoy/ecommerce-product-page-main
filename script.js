let productQuantity = 0;
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const productQuantitySpan = document.getElementById("productQuantity");

plusButton.addEventListener("click", () => {
  productQuantitySpan.innerHTML = ++productQuantity;
});

minusButton.addEventListener("click", () => {
  if (productQuantity === 0) {
    productQuantitySpan.innerHTML = 0;
  } else {
    productQuantitySpan.innerHTML = --productQuantity;
  }
});

// Get all the thumbnail images
const thumbnailImages = document.querySelectorAll(".thumbnail");
const mainImage = document.getElementById("main-image");

thumbnailImages.forEach((thumbnail, index) =>
  thumbnail.addEventListener("click", () => {
    mainImage.src = `images/image-product-${index + 1}.jpg`;
  })
);
