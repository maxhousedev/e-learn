import createUnorderedList from '../../utils/Components/createUnorderedList';
import createAnchor from '../../utils/Components/createAnchor';

const childrenProps = [
  {
    href: '#home',
    textContent: 'Home',
  },
  {
    href: '#home',
    textContent: 'Courses',
  },
  {
    href: '#home',
    textContent: 'Pricing',
  },
  {
    href: '#home',
    textContent: 'About',
  },
];

const children = childrenProps.map(({ href, textContent }) =>
  createAnchor({ classList: ['navList__a'], href, textContent })
);

const NavList = createUnorderedList({
  ulClassList: ['navList'],
  itemClassList: ['navList__item'],
  itemIDPrefix: 'navList-item',
  children,
});

export default NavList;
