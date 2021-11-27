import createContainer from '../../../utils/Components/createContainer';
import createImgHomePage from '../createImgHomePage';
import homePage from '../../../img/start-learning/home-page.png';
import background from '../../../svg/start-learning.svg';

const ArticleStartLearning = createContainer({
  tagName: 'article',
  classList: ['article-start-learning'],
});

const Img = createImgHomePage(homePage);
Img.classList.add('article-start-learning__img');
ArticleStartLearning.innerHTML = background;
ArticleStartLearning.appendChild(Img);

export default ArticleStartLearning;
