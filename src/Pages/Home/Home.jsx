import React from 'react';
import Banner from './Banner/Banner';
import FooterMessage from '../../components/Shared/FooterMessage';

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
        <div className='h-screen'>delete befor git push</div>
        
      </main>
      <FooterMessage {...props} />
    </>
  );
};

export default Home;