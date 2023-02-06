import { useRouter } from 'next/router';

import logo from '../../data/logo';
import navLinks from '../../data/navLink';
import AppleSVG from '../../public/icons/apple.svg';

const GNB = () => {
  const router = useRouter();

  return (
    <div className='flex'>
      <nav className='w-full flex self-center ml-10 md:ml-44' onClick={() => {
        router.push('/');
      }}>
        <AppleSVG className='h-9 w-fit cursor-pointer md:h-10 pr-3' />
        <button className={'font-bold text-2xl hidden md:block mt-1'}>{logo.name}</button>
      </nav>
      <nav className='w-full max-w-[520px] flex place-items-center justify-between mx-10 h-20 md:mx-44 '>
        {
          navLinks.map((navLink) => (
            <div key={navLink.id} className='flex flex-col max-w-min mt-2'>
              <button className={`px-3 text-base ${router.asPath === navLink.link ? 'font-semibold' : 'font-medium'}`}
                      onClick={() => {
                        router.push(navLink.link);
                      }}>{navLink.title}
              </button>
              <div
                className={`${router.asPath === navLink.link ? 'bg-main-1' : 'bg-white'} w-full h-2 rounded-md mt-1`} />
            </div>
          ))
        }
      </nav>
    </div>
  );
};

export default GNB;