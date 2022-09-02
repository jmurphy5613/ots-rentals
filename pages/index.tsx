import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </>

  )
}

export default Home
