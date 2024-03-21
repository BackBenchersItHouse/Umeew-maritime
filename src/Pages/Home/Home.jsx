import React from 'react';
import Banner from './Banner/Banner';
import CommitmentSection from '../../Components/CommitmentSection/CommitmentSection';

const Home = () => {
  return (
    <>
      <Banner />
      <CommitmentSection></CommitmentSection>
      <main className='max-w-[1440px] mx-auto'>
        {/* Children Width 1170px  */}
      </main>
      {/* Contact Our Team section, jodi footer hiseve na dhoro tahole akhane import here!!! */}
    </>
  );
};

export default Home;