import React from 'react';

import GNB from '../components/GNB';


export default function Layout({ children, isWhiteBg = false }: {
  children: React.ReactNode;
  hasMargin?: boolean;
  isWhiteBg?: boolean;
}): JSX.Element {
  return (
    <>
      <header className='bg-white tablet:flex justify-center'>
        <GNB />
      </header>
      <div
        className={`flex flex-1 flex-col ${
          isWhiteBg ? 'bg-white' : 'bg-white'
        } `}
      >
        <main className='relative flex flex-1 flex-col'>{children}</main>
      </div>
    </>
  );
}
