import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/user-view/navbar/Navbar'

import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistedStore } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {


  const router = useRouter()

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          { router.pathname !== '/login' && router.pathname !== '/dashboard' && <Navbar />}
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>    
  )
}

export default MyApp
