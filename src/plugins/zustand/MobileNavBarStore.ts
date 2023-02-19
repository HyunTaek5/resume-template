import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MobileNavBarState {
  isOpen: boolean;
  toggleIsOpen: (b: boolean) => void;
}

const useMobileNavBarStore = create<MobileNavBarState>()(
  persist((set, get) => ({
    isOpen: false,
    toggleIsOpen: () => set(() => ({ isOpen: !get().isOpen }))
  }), {
    name: 'mobile-nav-store'
  })
);

export default useMobileNavBarStore;


