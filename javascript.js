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


let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let count = document.getElementById("count");

minus.onclick = function(){
  if(count.innerHTML === '0') return;
  count.innerHTML = `${parseInt(count.innerHTML) - 1}`;
}
plus.onclick = function(){
  count.innerHTML = `${parseInt(count.innerHTML) + 1}`;
}


let cart = document.querySelector('.cart');
cart.onclick = function() {
  let cartContent = document.querySelector(".cart-content");
  if(cartContent.style.display === '') {
    cartContent.style.display = 'block';
  }else {
    cartContent.style.display = '';
  }
}


let addToCart = document.querySelector(".add");
let content = document.querySelector(".content");
addToCart.onclick = function() {
  let productsNumber = document.getElementById('count').innerHTML;
  if(productsNumber === '0') return;

  let count = document.querySelector(".count");
  let total = document.querySelector(".total");
  let icon = document.getElementById('count-icon');

  count.innerHTML = productsNumber;
  total.innerHTML = `$${productsNumber*125}.00`;
  icon.innerHTML = productsNumber;
  icon.style.display = 'inline';
  content.style.display = 'flex';
}


let deleteItem = document.querySelector('.delete');
  deleteItem.onclick = function() {
    let icon = document.getElementById('count-icon');
    icon.style.display = 'none';
    content.style.display = '';
}

// ======== LIGHTBOX ===========
let lightboxWrapper = document.querySelector('.lightbox-wrapper');
let lightboxCurrentImage = document.getElementById('lightbox-image');
currentImage.onclick = function () {
  lightboxCurrentImage.src = this.getAttribute("src").slice(0,22) + '.jpg';
  lightboxWrapper.style.display = 'block';
}


let lightboxThumbs = document.getElementById('lightbox-thumbnails');
lightboxThumbs.onclick = function(event) {
  let target = event.target;
  if(target.tagName !== 'IMG') return;

  let currentThumbnail = lightboxThumbs.querySelector(".current-thumbnail");
  currentThumbnail.classList.remove("current-thumbnail");
  let thumbnailWrapper = lightboxThumbs.querySelector(".thumbnail-wrapper");
  thumbnailWrapper.classList.remove("thumbnail-wrapper");

  lightboxCurrentImage.src = target.getAttribute("src").slice(0,22) + '.jpg';
  target.classList.add("current-thumbnail");
  target.parentElement.classList.add("thumbnail-wrapper");
}


let close = document.getElementById('close');
close.onclick = function() {
  let lightboxWrapper = document.querySelector('.lightbox-wrapper');
  lightboxWrapper.style.display = 'none';
}


// ========= menu for mobile ============

let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".close-menu");

menu.onclick = function() {
  dropMenu();
}
closeMenu.onclick = function() {
  dropMenu();
}

function dropMenu() {
  let list = document.querySelector(".list");
  if(list.style.display === ''){
    list.style.display = 'flex';
    closeMenu.style.display = 'block';
  }else {
    list.style.display = '';
    closeMenu.style.display = '';
  }
}

