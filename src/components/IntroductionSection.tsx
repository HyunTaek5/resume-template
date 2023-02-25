import React from 'react';

import { IntroductionType } from '../../data/about/introduction/types';

interface IntroductionProps {
  introduction: IntroductionType;
}

function IntroductionSection({ introduction }: IntroductionProps) {

  return (
    <>
      <div className='flex flex-col space-y-4'>
        <p>{introduction.jobTitle}</p>
        <text key='introduction-name' className='font-bold text-7xl text-main-1'>{introduction.name}</text>
        <text key='introduction-short' className='text-left'>{introduction.shortIntroduction}</text>
        <h2>About me</h2>
      </div>
    </>
  );
}

export default IntroductionSection;