import { useRouter } from 'next/router';

import navLinks from '../../data/navLink';

const GNB = () => {
  const router = useRouter();

  return (
    <nav className='w-full max-w-[270px] flex place-items-center justify-between mx-5 h-24 md:mx-40 '>
      {
        navLinks.map((navLink) => (
          <button className='px-3 text-base font-semibold' key={navLink.id} onClick={() => {
            router.push(navLink.link);
          }}>{navLink.title}</button>
        ))
      }
    </nav>
  );
};

export default GNB;