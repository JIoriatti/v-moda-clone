'use client'
import styles from './Banner.module.css'
import { useInView } from 'react-intersection-observer'

export default function Banner(){
    const { ref, inView, entry } = useInView({
        threshold: 0.75,
        triggerOnce: true,
    })    
    return(
        <section 
            ref={ref} 
            className={styles.container}
            style={{
                opacity: inView ? '1' : '0'
            }}
        >
            <div className={styles.rightImage}>
                <div className={styles.imageWrapper}>
                    <img className={styles.cover} data-src="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block/secondary_image/6/Marnik-square.jpg" src="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block/secondary_image/6/Marnik-square.jpg" alt="V-MODA x MARNIK" style={{opacity: '1'}}/>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.textFlexCenter}>
                        <h2 className={styles.header}>V-MODA x MARNIK</h2>
                        <a className={styles.watchNow} href="/">Watch Now</a>
                    </div>
                </div>
            </div>
            <div className={styles.leftImage}>
                <picture className={styles.picture}>
                    <source srcSet="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block/image/6/Marnik-main-03.jpg" media="(max-width: 767px)"/>
                    <img className={styles.image} data-src="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block/image/6/Marnik-main-03.jpg" src="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block/image/6/Marnik-main-03.jpg" alt="" style={{opacity: '1'}}/>
                </picture>
            </div>
        </section>
    )
}