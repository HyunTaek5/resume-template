import React from 'react';

import Layout from '../../src/layouts/Layout';

function Project() {
  return (
    <>
      <main className=''>

      </main>
    </>
  );
}

export default Project;

Project.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};