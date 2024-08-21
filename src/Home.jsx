import { SignInButton } from '@clerk/clerk-react';
import React from 'react'
import { Button } from './components/ui/button';

function Home() {
  return (
    <div>
      <SignInButton mode='modal' forceRedirectUrl='/'>
        <Button>SignIn</Button>
      </SignInButton>
    </div>
  )
}

export default Home;