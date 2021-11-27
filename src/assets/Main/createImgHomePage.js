export default function createImgHomePage(image) {
  const Img = document.createElement('img');
  Img.src = image;
  Img.alt = 'home-page';

  return Img;
}
