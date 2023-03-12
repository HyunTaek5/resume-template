import { AboutMeType } from '../../../data/about/aboutMe/types';

interface AboutMeProps {
  aboutMe: AboutMeType;
}

function AboutMeSection({ aboutMe }: AboutMeProps) {

  return (
    <>
      <div className='flex flex-col space-y-4'>
        <h2 className='text-2xl font-semibold'>About Me</h2>
        <p className='text-black'>{aboutMe.body}</p>
      </div>
    </>
  );
}

export default AboutMeSection;