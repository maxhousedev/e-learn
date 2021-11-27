import phoneIcon from '../../svg/phone.svg';
import breakpoints from '../../utils/js/breakpoints';

const phoneNumber = '9951234567';

const textContent = 'Contact us';

export default function createContactUs() {
  const ContactUs = document.createElement('a');
  ContactUs.href = `tel:+7${phoneNumber}`;
  ContactUs.classList.add('btn', 'btn-primary', 'btnContactUs');

  const mediaQueryFrom = window.matchMedia(
    `(min-width: ${breakpoints.mobileL})`
  );
  const mediaQueryTo = window.matchMedia(`(max-width: ${breakpoints.tablet})`);

  const setInnerHTML = () => {
    ContactUs.innerHTML = '';
    if (mediaQueryFrom.matches && mediaQueryTo.matches) {
      ContactUs.innerHTML = phoneIcon;
    } else {
      ContactUs.textContent = textContent;
    }
  };

  setInnerHTML();

  window.addEventListener('resize', setInnerHTML);

  return ContactUs;
}
