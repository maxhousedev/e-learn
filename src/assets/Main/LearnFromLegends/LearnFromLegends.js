import createContainer from '../../../utils/Components/createContainer';
import createTitle from '../../../utils/Components/createTitle';
import titleIcon from '../../../svg/learnFromLegendsTitle.svg';
import icon1 from '../../../svg/learn-from-legends/1.svg';
import icon2 from '../../../svg/learn-from-legends/2.svg';
import icon3 from '../../../svg/learn-from-legends/3.svg';

const SectionLearnFromLegend = createContainer({
  tagName: 'section',
  classList: [
    'flex-column',
    'container_padding-right',
    'container_padding-left',
    'section-learn-from-legend',
  ],
});

const titleProps = {
  tagName: 'h2',
  classList: ['title', 'title_marked'],
};
const Title = createTitle(titleProps);
Title.innerHTML = `Learn From The <span class="subtitle_marked">Legend</span> ${titleIcon}`;
SectionLearnFromLegend.appendChild(Title);

const Description = document.createElement('p');
Description.classList.add('section-learn-from-legend__descr', 'text-color');
Description.textContent =
  'Build skills with courses, certificates, and degrees online from world-class universities and companies.';
SectionLearnFromLegend.appendChild(Description);

const itemProps = [
  {
    icon: icon1,
    title: 'Daily Live Classes',
    descr:
      'Build skills with courses, certificates, and degrees online from world-class universities.',
  },
  {
    icon: icon2,
    title: 'Practice & Revise',
    descr:
      'Build skills with courses, certificates, and degrees online from world-class universities.',
  },
  {
    icon: icon3,
    title: 'Idea Making',
    descr:
      'Build skills with courses, certificates, and degrees online from world-class universities.',
  },
];

const AdvantagesList = document.createElement('ul');
AdvantagesList.classList.add('advantagesList');

for (let i = 0; i < itemProps.length; i++) {
  const { icon, title, descr } = itemProps[i];
  const Li = document.createElement('li');
  Li.classList.add('advantageItem');
  Li.innerHTML = icon;
  const CardTitle = createTitle({
    tagName: 'h4',
    classList: ['advantageItem__title'],
    textContent: title,
  });
  Li.appendChild(CardTitle);
  const CardDescr = document.createElement('p');
  CardDescr.classList.add('text-color', 'advantageItem__descr');
  CardDescr.textContent = descr;
  Li.appendChild(CardDescr);
  AdvantagesList.appendChild(Li);
}

SectionLearnFromLegend.appendChild(AdvantagesList);

export default SectionLearnFromLegend;
