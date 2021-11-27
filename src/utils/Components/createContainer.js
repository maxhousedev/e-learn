export default function createContainer({ tagName = 'div', classList = [] }) {
  const Container = document.createElement(tagName);

  if (classList.length) {
    Container.classList.add(...classList);
  }

  return Container;
}
