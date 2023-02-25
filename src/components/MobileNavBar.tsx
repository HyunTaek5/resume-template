import { useRouter } from 'next/router';

import { NavLinkType } from '../../data/header/navLink/types';
import useMobileNavBarStore from '../plugins/zustand/MobileNavBarStore';

interface MobileNavBarProps {
  navLinkList: NavLinkType[];
}

function MobileNavBar({ navLinkList }: MobileNavBarProps) {
  const router = useRouter();

  const { isOpen } = useMobileNavBarStore();

  return (
    <>
      <nav
        className={`relative w-full h-screen flex flex-col place-items-center hidden ${isOpen && 'block'}`}>
        {
          navLinkList.map((navLink) => (
            <div key={navLink.id} className={`flex flex-col max-w-min`}>
              <button className={`px-3 text-base ${router.asPath === navLink.link ? 'font-bold' : 'font-semibold'}`}
                      onClick={() => {
                        router.push(navLink.link);
                      }}>{navLink.title}
              </button>
            </div>
          ))
        }
      </nav>
    </>

  );
}

export default MobileNavBar;