import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import DetailBoxes from '../components/detail-boxs/DetailBoxes'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div>
          <div style={{ position: 'absolute', zIndex: '999' }}>
            <div className={styles["video-title"]}>
              <h1 className={styles.title}>Borrow for the <br/> Documentary</h1>
              <button className={styles["store-button"]}>See Current Offerings</button>
            </div>
          </div>
          <video muted loop autoPlay className={styles.video}>
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
        <DetailBoxes />
      </div>
    </>

  )
}

export default Home
