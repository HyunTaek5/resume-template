import React from 'react';

import Introduction from '../../data/about/introduction';
import Layout from '../../src/layouts/Layout';

function About() {
  const introduction = Introduction;

  return (
    <>
      <main className='flex flex-1 justify-start'>
        <div className='flex flex-col space-y-4'>
          <p>{introduction.jobTitle}</p>
          <text key='introduction-name' className='font-bold text-7xl text-main-1'>{introduction.name}</text>
          <text key='introduction-short' className='text-left'>{introduction.shortIntroduction}</text>
          <h2>About me</h2>
        </div>


      </main>
    </>
  );
}

export default About;

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};