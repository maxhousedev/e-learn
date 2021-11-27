import createContainer from '../../../utils/Components/createContainer';
import createTitle from '../../../utils/Components/createTitle';
import createAnchor from '../../../utils/Components/createAnchor';
import createSubTitle from '../createSubTitle';
import createDescription from '../createDescription';
import appStoreIcon from '../../../svg/appStore.svg';
import googlePlayIcon from '../../../svg/googlePlay.svg';

const SectionStartLearning = createContainer({
  tagName: 'section',
  classList: [
    'flex-column',
    'container_padding-left',
    'section-start-learning',
  ],
});
SectionStartLearning.id = 'home';

const titleProps = {
  tagName: 'h1',
  classList: ['title', 'title_marked'],
  textContent: 'Start Learning',
};
const Title = createTitle(titleProps);
SectionStartLearning.appendChild(Title);

const subtitleProps = {
  textContent: 'Today for Online Courses, E-Learning is with Apps',
  subStr: 'E-Learning',
};
const SubTitle = createSubTitle(subtitleProps);
SectionStartLearning.appendChild(SubTitle);

const Description = createDescription(
  'Start Learning Today. Join Now for Online Courses. Learning is at your fingertips with the e-Learning Point app for android.'
);
SectionStartLearning.appendChild(Description);

const btnContainer = createContainer({
  classList: ['btn-container'],
});
SectionStartLearning.appendChild(btnContainer);

const storeProps = {
  target: '_blank',
  classList: ['btn', 'btn-secondary', 'btnStore'],
};

const appStoreProps = {
  href: 'https://www.apple.com/ru/app-store/',
  ...storeProps,
};

const AppStore = createAnchor(appStoreProps);
AppStore.innerHTML = appStoreIcon;
btnContainer.appendChild(AppStore);

const googlePlayProps = {
  href: 'https://play.google.com/store/apps',
  ...storeProps,
};
const GooglePlay = createAnchor(googlePlayProps);
GooglePlay.innerHTML = googlePlayIcon;
btnContainer.appendChild(GooglePlay);

export default SectionStartLearning;
