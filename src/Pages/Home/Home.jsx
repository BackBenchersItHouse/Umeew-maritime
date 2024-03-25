import React from 'react';
import Banner from './Banner/Banner'; 
import ModularContent from '@/components/Shared/ModularContent';

const Home = () => {
  const props = {
    btn: 'Contact Our Team',
    // description: 'Ready to experience the United Marine Engineering & Electrical Works difference? Contact us today and let our experts chart a course for your success!',
  };
  return (
    <>
      <Banner />
      <main className='max-w-[1440px] mx-auto px-5 md:px-0'>
        {/* Children Width 1170px  */}
        
      </main>
      <ModularContent {...props} />
    </>
  );
};

export default Home;