import { SignInButton } from '@clerk/clerk-react';
import React from 'react'
import { Button } from './components/ui/button';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import MostSearchedCar from './components/MostSearchedCar';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function Home() {
  return (
    <div>
      {/* Header */}
        <Header />
      {/* Hero */}
        <Hero />
      {/*Category */}
        <Category />
      {/* most searched car */}
        <MostSearchedCar />
      {/* InfoSection */}
        <InfoSection />
      {/*Footer*/}
        <Footer />
    </div>
  )
}

export default Home;