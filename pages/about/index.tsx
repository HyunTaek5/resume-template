import React from 'react';

import Introduction from '../../data/about/introduction';
import AboutMeSection from '../../src/components/Section/AboutMeSection';
import IntroductionSection from '../../src/components/Section/IntroductionSection';
import Layout from '../../src/layouts/Layout';

function About() {
  const introduction = Introduction;

  return (
    <>
      <main className='flex flex-col mx-10 md:m-10 max-w-screen-xl'>
        <IntroductionSection introduction={introduction} />
        <AboutMeSection />
      </main>
    </>
  );
}

export default About;

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};