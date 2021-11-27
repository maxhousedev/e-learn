import createContainer from '../../../utils/Components/createContainer';
import createTitle from '../../../utils/Components/createTitle';
import createAnchor from '../../../utils/Components/createAnchor';
import createSubTitle from '../createSubTitle';
import createDescription from '../createDescription';

const SectionStartLearning = createContainer({
  tagName: 'section',
  classList: [
    'flex-column',
    'container_padding-right',
    'section-good-learning',
  ],
});

const titleProps = {
  tagName: 'h2',
  classList: ['title', 'title_marked'],
  textContent: 'Good Learning is',
};
const Title = createTitle(titleProps);
SectionStartLearning.appendChild(Title);

const subtitleProps = {
  textContent: 'Very Important',
  subStr: 'Important',
};
const SubTitle = createSubTitle(subtitleProps);
SectionStartLearning.appendChild(SubTitle);

const Description = createDescription(
  'Start Learning Today. Join Now for Online Courses. Learning is at your fingertips with the e-Learning Point app for android.'
);
SectionStartLearning.appendChild(Description);

const btnContainer = createContainer({
  classList: ['flex-raw', 'btn-container'],
});
SectionStartLearning.appendChild(btnContainer);

const getStartedProps = {
  href: '#home',
  classList: ['btn', 'btn-primary', 'btnGetStarted'],
  textContent: 'Get Started',
};

const GetStarted = createAnchor(getStartedProps);
btnContainer.appendChild(GetStarted);

export default SectionStartLearning;
