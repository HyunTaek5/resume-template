import { useRouter } from 'next/router';

import navLinks from '../../data/navLink';

const GNB = () => {
  const router = useRouter();

  return (
    <nav className='w-full max-w-[270px] flex place-items-center justify-between mx-5 h-20 md:mx-40 '>
      {
        navLinks.map((navLink) => (
          <div key={navLink.id} className='flex flex-col max-w-min mt-2'>
            <button className={`px-3 text-base ${router.asPath === navLink.link ? 'font-semibold' : 'font-medium'}`}
                    onClick={() => {
                      router.push(navLink.link);
                    }}>{navLink.title}
            </button>
            <div className={`${router.asPath === navLink.link ? 'bg-main-1' : 'bg-white'} w-full h-2 rounded-md`} />
          </div>
        ))
      }
    </nav>
  );
};

export default GNB;