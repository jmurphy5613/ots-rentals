import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/Navbar'
import { useState } from 'react'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import cartReducer from '../redux/features/cart'

function MyApp({ Component, pageProps }: AppProps) {


  const store = configureStore({
    reducer: {
      cart: cartReducer
    }
  })

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>    
  )
}

export default MyApp
