import createUnorderedList from '../../utils/Components/createUnorderedList';
import createAnchor from '../../utils/Components/createAnchor';

const navLinks = ['Home', 'Courses', 'Pricing', 'About'];

const children = navLinks.map((textContent) =>
  createAnchor({ classList: ['navList__a'], textContent })
);

const NavList = createUnorderedList({
  ulClassList: ['navList'],
  itemClassList: ['navList__item'],
  itemIDPrefix: 'navList-item',
  children,
});

export default NavList;
