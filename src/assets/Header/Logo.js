import logoIcon from '../../svg/logo.svg';
import createAnchor from '../../utils/Components/createAnchor';

const LOGO_TEXT = 'Learn';

const LogoAnchor = createAnchor({
  href: '#home',
  classList: ['logo'],
  textContent: LOGO_TEXT,
});
LogoAnchor.insertAdjacentHTML('afterbegin', logoIcon);

export default LogoAnchor;
