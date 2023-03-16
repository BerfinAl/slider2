const slideImg = document.querySelector(".slide-img");

const images = [
  "images/paris.avif",
  "images/ny.avif",
  "images/room.avif",
  "images/pool.avif",
];

let i = 0;

function slide() {
  if (i > images.length - 1) i = 0;
  slideImg.src = images[i];
  i++;
  setTimeout(() => slide(), 3000);
}
