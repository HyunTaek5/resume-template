import { useRouter } from 'next/router';

import navLinks from '../../data/navLink';

const GNB = () => {
  const router = useRouter();

  return (
    <nav className='w-full max-w-[270px] flex place-items-center justify-between mx-5 h-20 md:mx-40 '>
      {
        navLinks.map((navLink) => (
          <button className='px-3 text-base font-medium' key={navLink.id} onClick={() => {
            router.push(navLink.link);
          }}>{navLink.title}</button>
        ))
      }
    </nav>
  );
};

export default GNB;