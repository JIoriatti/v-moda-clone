'use client'
import styles from './ImageGrid.module.css'
import { useInView } from 'react-intersection-observer'

export default function ImageGrid(){
    const { ref, inView, entry } = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });
    return (
        <section 
            ref={ref} 
            className={styles.container}
            style={{
                opacity: inView ? '1' : '0'
            }}
        >
            <ul className={styles.imageList}>
                <li className={styles.tile}>
                    <a className={styles.link} href="/">
                        <div className={styles.background}></div>
                        <div className={styles.firstTileInfo}>
                            <p className={styles.title}>SOCIAL FEED</p>
                            <h3 className={styles.header}>#V-MODA</h3>
                        </div>
                        <div className={styles.viewAllContainer}>
                            <p className={styles.viewAll}>View all</p>
                            <div className={styles.arrow}>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </a>
                </li>
                <li className={styles.tile}>
                    <a className={styles.link} href="/">
                        <img className={styles.img} data-src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/363284774_850312149275954_1863773205594690373_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=9BLw1zrnECsAX_5U7_u&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAW1Nj-qCfGqZFc5DgIebqah55zJz7JV37WBPWQVbM8sA&amp;oe=64C4CFAF" src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/363284774_850312149275954_1863773205594690373_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=9BLw1zrnECsAX_5U7_u&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAW1Nj-qCfGqZFc5DgIebqah55zJz7JV37WBPWQVbM8sA&amp;oe=64C4CFAF" alt="Click to open v-moda instagram page" style={{opacity: '1'}}/>
                    </a>
                </li>
                <li className={styles.tile}>
                    <a className={styles.link} href="/">
                        <img className={styles.img} data-src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/361726344_300665462430541_798485057069496543_n.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=4pmonGapwSsAX8PwC2L&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfASkT7cmdVh-N1zlwpRbdYofi0xAsLZw0s_rRUwzMv5CQ&amp;oe=64C2FF4A" src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/361726344_300665462430541_798485057069496543_n.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=4pmonGapwSsAX8PwC2L&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfASkT7cmdVh-N1zlwpRbdYofi0xAsLZw0s_rRUwzMv5CQ&amp;oe=64C2FF4A" alt="Click to open v-moda instagram page" style={{opacity: '1'}}/>
                    </a>
                </li>
                <li className={styles.tile}>
                    <a className={styles.link} href="/">
                        <img className={styles.img} data-src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/361376838_298486042551856_4857975075766632084_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=AxHJAJcPGkMAX_usqRQ&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBdgc0FHcp416YHO0bi2CbCGmbaYlsMGZHXkaqaCd2HHw&amp;oe=64C510C7" src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/361376838_298486042551856_4857975075766632084_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=AxHJAJcPGkMAX_usqRQ&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBdgc0FHcp416YHO0bi2CbCGmbaYlsMGZHXkaqaCd2HHw&amp;oe=64C510C7" alt="Click to open v-moda instagram page" style={{opacity: '1'}}/>
                    </a>
                </li>
                <li className={styles.tile}>
                    <a className={styles.link} href="/">
                        <img className={styles.img} data-src="https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/359542299_995609841566229_4124059255558890360_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=s-DRDZHy8_8AX-Usnbz&amp;_nc_ht=scontent-iad3-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAGpW34t9KacO0KZtxHZxldIBEFNVqIVSNWw0v_im1uGQ&amp;oe=64C49243" src="https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/359542299_995609841566229_4124059255558890360_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=s-DRDZHy8_8AX-Usnbz&amp;_nc_ht=scontent-iad3-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAGpW34t9KacO0KZtxHZxldIBEFNVqIVSNWw0v_im1uGQ&amp;oe=64C49243" alt="Click to open v-moda instagram page" style={{opacity: '1'}}/>
                    </a>
                </li>
                <li className={styles.tile}>
                    <a className={styles.link} href="/">
                        <img className={styles.img} data-src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/358412552_642981320820411_8449164045766992095_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=STtYSQaH2NEAX-6L9um&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD8UxIknI3V0SrFPbK2_dtDB-OlrVJGpLHe4RGh1qUL8Q&amp;oe=64C52964" src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/358412552_642981320820411_8449164045766992095_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=STtYSQaH2NEAX-6L9um&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD8UxIknI3V0SrFPbK2_dtDB-OlrVJGpLHe4RGh1qUL8Q&amp;oe=64C52964" alt="Click to open v-moda instagram page" style={{opacity: '1'}}/>
                    </a>
                </li>
                <li className={styles.tile}>
                    <a className={styles.link} href="/">
                        <img className={styles.img} data-src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/356251189_655869419332734_3798619321751283345_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=dYP4s52OPnMAX_I2N0C&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfARB1ZWn2c4HI9u1Nh8rAgmlqiamXHjn97YlwW5hCKPHg&amp;oe=64C541E9" src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/356251189_655869419332734_3798619321751283345_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=dYP4s52OPnMAX_I2N0C&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfARB1ZWn2c4HI9u1Nh8rAgmlqiamXHjn97YlwW5hCKPHg&amp;oe=64C541E9" alt="Click to open v-moda instagram page" style={{opacity: '1'}}/>
                    </a>
                </li>
                <li className={styles.tile}>
                    <a className={styles.link} href="/">
                        <img className={styles.img} data-src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/355359038_980677886690447_8040273553960858766_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2XLd9WDWaEkAX8IBvTd&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDdSWPHuXi6qBEChq8oo5jBZQm0_YdKLIjilZQUM1dMWA&amp;oe=64C4AEBA" src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/355359038_980677886690447_8040273553960858766_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2XLd9WDWaEkAX8IBvTd&amp;_nc_ht=scontent-iad3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDdSWPHuXi6qBEChq8oo5jBZQm0_YdKLIjilZQUM1dMWA&amp;oe=64C4AEBA" alt="Click to open v-moda instagram page" style={{opacity: '1'}}/>
                    </a>
                </li>
            </ul>
        </section>
    )
}