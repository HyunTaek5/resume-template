import React from 'react';

import Introduction from '../../data/about/introduction';
import IntroductionSection from '../../src/components/IntroductionSection';
import Layout from '../../src/layouts/Layout';

function About() {
  const introduction = Introduction;

  return (
    <>
      <main className='flex flex-1 justify-start'>
        <IntroductionSection introduction={introduction} />
      </main>
    </>
  );
}

export default About;

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};