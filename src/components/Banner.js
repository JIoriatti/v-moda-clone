import styles from './Banner.module.css'

export default function Banner(){
    return(
        <section className={styles.container}>
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