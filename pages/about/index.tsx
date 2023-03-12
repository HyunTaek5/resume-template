import React from 'react';

import AboutMe from '../../data/about/aboutMe';
import Introduction from '../../data/about/introduction';
import AboutMeSection from '../../src/components/Section/AboutMeSection';
import IntroductionSection from '../../src/components/Section/IntroductionSection';
import Layout from '../../src/layouts/Layout';

function About() {
  const introduction = Introduction;
  const aboutMe = AboutMe;

  return (
    <>
      <main className='flex flex-col mx-10 tablet:mt-52 max-w-screen-xl'>
        <IntroductionSection introduction={introduction} />
        <AboutMeSection aboutMe={aboutMe} />
      </main>
    </>
  );
}

export default About;

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};