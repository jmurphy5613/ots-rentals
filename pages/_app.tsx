import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/Navbar'
import { useState } from 'react'

import { configureStore } from '@reduxjs/toolkit'

function MyApp({ Component, pageProps }: AppProps) {


  const store = configureStore({
    reducer: {}
  })

  return (
    <>
      <Navbar numberOfItems={1} />
      <Component {...pageProps} />
    </>    
  )
}

export default MyApp
