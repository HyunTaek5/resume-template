import React from 'react';

import Layout from '../src/layouts/Layout';

function Home() {
  return (
    <>
      <main className=''>

      </main>
    </>
  );
}

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
