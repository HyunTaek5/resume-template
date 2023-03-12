import React from 'react';

import { IntroductionType } from '../../../data/about/introduction/types';

interface IntroductionProps {
  introduction: IntroductionType;
}

function IntroductionSection({ introduction }: IntroductionProps) {

  return (
    <>
      <div className='flex flex-col space-y-4'>
        <p key='introduction-job-title' className='font-tinos text-black'>{introduction.jobTitle}</p>
        <text key='introduction-name' className='font-bold text-7xl text-main-1'>{introduction.name}</text>
        <text key='introduction-short' className='text-left'>{introduction.shortIntroduction}</text>
        <button key='contact-button' className='bg-main-1 text-white rounded-md max-w-[134px] h-11'>Contact Me</button>
      </div>
    </>
  );
}

export default IntroductionSection;