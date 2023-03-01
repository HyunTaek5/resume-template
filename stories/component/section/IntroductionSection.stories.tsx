import Introduction from '../../../data/about/introduction';
import IntroductionSection from '../../../src/components/Section/IntroductionSection';

export default {
  title: 'Component/Section/IntroductionSection'
};

const introduction = Introduction;

export const IntroductionSectionStory = () => <IntroductionSection introduction={introduction} />;