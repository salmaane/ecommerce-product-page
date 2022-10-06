let imagesBox = document.querySelector(".thumbnails");
let currentImage = document.querySelector(".current-image");

imagesBox.onclick = function(event) {
  let target = event.target;
  if(target.tagName !== 'IMG') return;

  let currentThumbnail = document.querySelector(".current-thumbnail");
  currentThumbnail.classList.remove("current-thumbnail");
  let thumbnailWrapper = document.querySelector(".thumbnail-wrapper");
  thumbnailWrapper.classList.remove("thumbnail-wrapper");

  currentImage.src = target.getAttribute("src").slice(0,22) + '.jpg';
  target.classList.add("current-thumbnail");
  target.parentElement.classList.add("thumbnail-wrapper");
}