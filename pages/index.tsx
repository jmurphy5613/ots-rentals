import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import DetailBoxes from '../components/detail-boxs/DetailBoxes'
import { BsArrowRight } from 'react-icons/bs'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter()

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles["video-container"]}>
          <div className={styles["video-overlay"]}>
            <div className={styles["video-title"]}>
              <h1 className={styles.title}>Lights. Camera. <br/> Rent!</h1>
              <button onClick={() => {
                router.push('/search')
              }} className={styles["store-button"]}>See Current Offerings <BsArrowRight className={styles["button-arrow"]} /></button>
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
