export default function createSubTitle({
  textContent,
  subStr,
  className = 'subtitle',
}) {
  const SubTitle = document.createElement('h2');
  SubTitle.classList.add(className);

  const HTMLString = textContent.replace(
    subStr,
    `<span class="${className}_marked">${subStr}</span>`
  );

  SubTitle.innerHTML = HTMLString;

  return SubTitle;
}
