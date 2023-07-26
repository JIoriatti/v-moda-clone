'use client'
import styles from './Personalize.module.css'
import { useInView } from 'react-intersection-observer';

export default function Personalize(){
    const { ref, inView, entry } = useInView({
        threshold: 0.75,
        triggerOnce: true,
    });

    return (
        <section 
            className={styles.container}
            ref={ref}
            style={{
                opacity: inView ? '1' : '0'
            }}
        >
            <div className={styles.left}>
                <h2 className={styles.header}>Make things personal.</h2>
                <p className={styles.text}>Leave your mark on your V-MODA headphones with custom shields. Thanks to two different design techniques, a variety of colors and materials, and the option to switch them out whenever you want, V-MODA custom shields are the ultimate form of visual artistic expression for music lovers who want something you can’t just get anywhere.</p>
                <a className={styles.discover} href="/">Discover More</a>
            </div>
            <div className={styles.right}>
                <div className={styles.imageWrapper}>
                    <picture className={styles.picture}>
                        <source srcSet="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block/image/5/Customization-03.png" media="(max-width: 768px)"/>
                        <img data-src="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block/image/5/Customization-03.png" src="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block/image/5/Customization-03.png" alt="" loading="lazy" style={{opacity: '1'}} className={styles.image}/>
                    </picture>
                </div>
            </div>
        </section>
    )
}