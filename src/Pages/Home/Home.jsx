import React from 'react';
import Banner from './Banner';
import ModularContent from '@/components/ModularContent';
import OurCommitment from './OurCommitment';
import OurServices from './OurServices';

const Home = () => {
  const props = {
    btn: 'Contact Our Team',
    // description: 'Ready to experience the United Marine Engineering & Electrical Works difference? Contact us today and let our experts chart a course for your success!',
  };
  return (
    <>
      <Banner />
      <main className='max-w-[1170px] mx-auto px-5 md:px-2'>
        {/* Children Width 1170px  */}
        <OurCommitment />
        <OurServices />
      </main>
      <ModularContent {...props} />
    </>
  );
};

export default Home;