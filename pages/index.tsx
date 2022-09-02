import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import DetailBoxes from '../components/detail-boxs/DetailBoxes'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <video muted loop className={styles.video}>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <DetailBoxes />
      </div>
    </>

  )
}

export default Home
