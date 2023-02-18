import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import metadata from '../data/header/metadata';


type Page<P = Record<string, never>> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Props = AppProps<{ dehydratedState: unknown }> & {
  Component: Page<{ dehydratedState: unknown }>;
};

function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <div className='flex min-h-screen flex-1 flex-col text-main-1 font-montserrat'>
        <Head>
          <title>{metadata.title}</title>
          {metadata.metaList.map((meta) => (
            <meta key={meta.id} name={meta.name} content={meta.content} />
          ))}
          <link rel={metadata.link.rel} href={metadata.link.href} />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </div>

      <ToastContainer
        autoClose={3000}
        hideProgressBar
        limit={1}
        onClick={() => toast.clearWaitingQueue()}
      />
    </>
  );
}

export default App;
