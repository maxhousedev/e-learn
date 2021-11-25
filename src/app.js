import './scss/styles.scss';
import favicon from './img/logo.png';
import loadFavicon from './utils/js/loadFavicon';
import { Header, Nav, Burger, ContactUs } from './assets/Header/Header';

export default function createApp() {
  loadFavicon(favicon);
  const Root = document.body;
  Root.appendChild(Header);
}
