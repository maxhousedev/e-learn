export default function createButton({
  type = 'button',
  classList = [],
  disable = false,
  textContent = 'new Button',
}) {
  const Button = document.createElement('button');
  Button.type = type;
  Button.disable = disable;
  Button.textContent = textContent;
  if (classList.length) {
    Button.classList.add(...classList);
  }

  return Button;
}
