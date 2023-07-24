import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.centering}>
      <div className={styles.intro}>
        <h1 className={styles.header}>Elevate Your Performance.</h1>
        <p className={styles.subHeader}>Unleash the power of precision and clarity with our cutting-edge DJ headphones.</p>
        <button className={styles.discoverBtn}>Discover all products</button>
      </div>
      </div>
      <div className={styles.heroContainer}>
      <video  className={styles.hero} width="100%" height="100%" data-mobile="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block_item/video_mobile/67/Sequence-verticale2.mp4" data-video="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block_item/video/67/Sequence_01_10.mp4" autoPlay muted playsInline loop>
        <source src="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block_item/video/67/Sequence_01_10.mp4" type="video/mp4" />
      </video>
      </div>
    </main>
  )
}
