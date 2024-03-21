import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import Banner from './Banner/Banner';
import CommitmentSection from '../../Components/CommitmentSection/CommitmentSection';

const Home = () => {
  return (
    <>
      <Banner />
      <CommitmentSection></CommitmentSection>
    </>
  );
};

export default Home;