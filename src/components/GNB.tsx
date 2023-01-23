import { useRouter } from 'next/router';

import navLinks from '../../data/navLink';

const GNB = () => {
  const router = useRouter();

  return (
    <nav>
      {
        navLinks.map((navLink) => (
          <button className='px-3' key={navLink.id} onClick={() => {
            router.push(navLink.link);
          }}>{navLink.title}</button>
        ))
      }
    </nav>
  );
};

export default GNB;