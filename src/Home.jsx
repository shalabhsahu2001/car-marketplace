import { SignInButton } from '@clerk/clerk-react';
import React from 'react'
import { Button } from './components/ui/button';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';

function Home() {
  return (
    <div>
      {/* Header */}
        <Header />
      {/* Hero */}
        <Hero />
      {/*Category */}
        <Category />
    </div>
  )
}

export default Home;