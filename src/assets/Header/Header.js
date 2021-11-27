import createHeader from '../../utils/Components/createHeader';
import Logo from './Logo';
import NavList from './NavList';
import { Burger, BurgerLines } from './Burger';
import createContactUs from './ContactUs';
import burgerCross from '../../svg/cross.svg';

const { Header, Nav } = createHeader({
  headerClassList: [
    'container',
    'container_padding-left',
    'container_padding-right',
    'header',
  ],
  navClassList: ['nav'],
});

Header.insertAdjacentElement('afterbegin', Logo);
Header.insertAdjacentElement('beforeend', Burger);

Nav.appendChild(NavList);

const ContactUs = createContactUs();
Nav.appendChild(ContactUs);

Burger.addEventListener('click', () => {
  Burger.classList.toggle('is-active');
  if (Burger.classList.contains('is-active')) {
    Nav.classList.add('is-active');
    Burger.innerHTML = burgerCross;
  } else {
    Nav.classList.remove('is-active');
    Burger.innerHTML = BurgerLines;
  }
});

export { Header, Nav, Burger, ContactUs };
