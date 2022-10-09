import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/user-view/navbar/Navbar'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import cartReducer from '../redux/features/cart'

import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {


  const store = configureStore({
    reducer: {
      cart: cartReducer
    }
  })

  const router = useRouter()

  return (
    <>
      <Provider store={store}>
        { router.pathname !== '/login' && router.pathname !== '/dashboard' && <Navbar />}
        <Component {...pageProps} />
      </Provider>
    </>    
  )
}

export default MyApp
