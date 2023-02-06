import { useRouter } from 'next/router';

import logo from '../../data/logo';
import navLinks from '../../data/navLink';
import AppleSVG from '../../public/icons/apple.svg';

const GNB = () => {
  const router = useRouter();

  return (
    <div className='flex'>
      <nav className='w-full flex self-center ml-10 tablet:ml-44' onClick={() => {
        router.push('/');
      }}>
        <AppleSVG className='h-9 w-fit cursor-pointer tablet:h-10 pr-3' />
        <button className={'font-bold text-md hidden tablet:block text-2xl mt-1'}>{logo.name}</button>
      </nav>
      <nav
        className='w-full max-w-[520px] flex place-items-center justify-between mx-10 h-20 tablet:mx-44'>
        {
          navLinks.map((navLink) => (
            <div key={navLink.id} className='flex flex-col max-w-min hidden sm:block'>
              <button className={`px-3 text-base ${router.asPath === navLink.link ? 'font-semibold' : 'font-medium'}`}
                      onClick={() => {
                        router.push(navLink.link);
                      }}>{navLink.title}
              </button>
            </div>
          ))
        }
      </nav>
    </div>
  );
};

export default GNB;