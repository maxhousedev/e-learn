import createButton from '../../utils/Components/createButton';

export const Burger = createButton({ classList: ['burger'] });

const burgerLineClass = 'burger__line';

export const BurgerLines = `
<span class="${burgerLineClass} ${burgerLineClass}_top"></span>
<span class="${burgerLineClass} ${burgerLineClass}_middle"></span>
<span class="${burgerLineClass} ${burgerLineClass}_bottom"></span>
`;

Burger.innerHTML = BurgerLines;
