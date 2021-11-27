import 'animate.css';
import './scss/styles.scss';
import favicon from './img/logo.png';
import loadFavicon from './utils/js/loadFavicon';
import { Header, Nav, Burger, ContactUs } from './assets/Header/Header';
import Main from './assets/Main/Main';

export default function createApp() {
  loadFavicon(favicon);
  const Root = document.body;
  Root.appendChild(Header);
  Root.appendChild(Main);
}
