import createContainer from '../../../utils/Components/createContainer';
import createImgHomePage from '../createImgHomePage';
import homePage from '../../../img/good-learning/home-page.png';
import background from '../../../svg/good-learning.svg';

const ArticleGoodLearning = createContainer({
  tagName: 'article',
  classList: ['article-good-learning'],
});

const Img = createImgHomePage(homePage);
Img.classList.add('article-good-learning__img');
ArticleGoodLearning.innerHTML = background;
ArticleGoodLearning.appendChild(Img);

export default ArticleGoodLearning;
