import { useRouter } from 'next/router';
import AppleSVG from 'public/icons/apple.svg';
import MenuSVG from 'public/icons/icon-menu.svg';

import logo from '../../data/logo';
import navLinks from '../../data/navLink';

const GNB = () => {
  const router = useRouter();

  return (
    <div className='flex h-20 tablet:mx-44'>
      <nav className='w-full flex self-center ml-10' onClick={() => {
        router.push('/');
      }}>
        <AppleSVG className='h-9 w-fit cursor-pointer tablet:h-10 pr-3' />
        <button className={'font-bold text-md hidden tablet:block text-2xl mt-1'}>{logo.name}</button>
      </nav>
      <nav
        className='w-full max-w-[520px] flex place-items-center justify-between mx-10 h-20 '>
        {
          navLinks.map((navLink) => (
            <div key={navLink.id} className='flex flex-col max-w-min hidden tablet:block'>
              <button className={`px-3 text-base ${router.asPath === navLink.link ? 'font-semibold' : 'font-medium'}`}
                      onClick={() => {
                        router.push(navLink.link);
                      }}>{navLink.title}
              </button>
            </div>
          ))
        }
      </nav>
      <div className='flex h-20 mr-10 place-items-center justify-end tablet:hidden'>
        <MenuSVG className='h-fit w-fit' />
      </div>
    </div>
  );
};

export default GNB;