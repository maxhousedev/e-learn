import createContainer from '../../utils/Components/createContainer';
import SectionStartLearning from './StartLearning/Section';
import ArticleStartLearning from './StartLearning/Article';
import SectionGoodLearning from './GoodLearning/Section';
import ArticleGoodLearning from './GoodLearning/Article';
import SectionLearnFromLegend from './LearnFromLegends/LearnFromLegends';

const mainProps = {
  tagName: 'main',
  classList: ['container'],
};

const Main = createContainer(mainProps);

const RawStartLearning = createContainer({
  classList: ['flex-row'],
});
Main.appendChild(RawStartLearning);
RawStartLearning.appendChild(SectionStartLearning);
RawStartLearning.appendChild(ArticleStartLearning);

const RawGoodLearning = createContainer({
  classList: ['flex-row', 'row_margin-bottom'],
});
Main.appendChild(RawGoodLearning);
RawGoodLearning.appendChild(ArticleGoodLearning);
RawGoodLearning.appendChild(SectionGoodLearning);

Main.appendChild(SectionLearnFromLegend);

export default Main;
