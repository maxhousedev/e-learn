import createButton from '../../utils/Components/createAnchor';

const phonNumber = '9951234567';

const ContactUs = createButton({
  href: `tel:+7${phonNumber}`,
  classList: ['btn', 'btn-primary', 'btnContactUs'],
  textContent: 'Contact us',
});

export default ContactUs;
