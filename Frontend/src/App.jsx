import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/clerk-react'

function App() {

  return (
    <>
      Ashish prajapat Frontend  this

      <SignedOut>
        <SignInButton  mode='modal' >
          GetStarted
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </>
  )
}

export default App
