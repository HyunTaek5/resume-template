import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react';
import { toast, ToastContainer } from 'react-toastify';


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
      <div className='flex min-h-screen flex-1 flex-col'>
        <Head>
          <title>이력서 템플릿</title>
          <meta name='description' content='Resume Template of Techeer' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
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
