import Image from 'next/image'
import styles from './page.module.css'
import MainCarousel from '@/components/MainCarousel'
import Personalize from '@/components/Personalize'
import Banner from '@/components/Banner'
import QuoteCarousel from '@/components/QuoteCarousel'
import ImageGrid from '@/components/ImageGrid'
import NewsLetter from '@/components/NewsLetter'
import Welcome from '@/components/Welcome'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.centering}>
        <Welcome />
      </div>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContainer}>
        <video  className={styles.hero} width="100%" height="100%" data-mobile="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block_item/video_mobile/67/Sequence-verticale2.mp4" data-video="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block_item/video/67/Sequence_01_10.mp4" autoPlay muted playsInline loop>
          <source src="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block_item/video/67/Sequence_01_10.mp4" type="video/mp4" />
        </video>
        </div>
      </div>
      <MainCarousel/> 
      <Personalize />
      <Banner />
      <section className={styles.quoteCarouselWrapper}>
        <QuoteCarousel /> 
      </section>
      <ImageGrid />
      <NewsLetter />
      <Footer />
    </main>
  )
}
