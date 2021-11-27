export default function createDescription(textContent) {
  const Description = document.createElement('p');
  Description.classList.add('descr', 'text-color');
  Description.textContent = textContent;

  return Description;
}
