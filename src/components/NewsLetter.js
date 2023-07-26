import styles from './NewsLetter.module.css'

export default function NewsLetter(){
    return (
        <section className={styles.container}>
            <img data-src="/left-cable-newsletter.png" src="/left-cable-newsletter.png" alt="" className={styles.img1} style={{opacity: '1'}}></img>
            <div className={styles.subscribeWidget}>
                <h2 className={styles.header}>Hear it first</h2>
                <p className={styles.text}>Leave us your email for the latest news and exclusive offers from V-MODA</p>
                <br />
                <div className={styles.formContainer}>
                    <form className={styles.form} action="" id='newsletter'>
                        <div className={styles.centerFormContainer}>
                            <div className={styles.centerForm}>
                                <label htmlFor="email" className={styles.emailLabel}>Enter your email address</label>
                                <input className={styles.email} type="email" id='email' autoComplete='email' name='email' />
                            </div>
                            <button className={styles.subscribe}>Subscribe</button>
                        </div>
                        <label htmlFor="privacy" className={styles.privacyLabel}>
                            <input className={styles.checkbox} type="checkbox" id='privacy' required name='privacy'/>
                            {`By submitting this form, you agree to our `}
                            <a href="/" className={styles.inlineLink}>Privacy Policy and Terms</a>
                        </label>
                    </form>
                </div>
            </div>
            <img data-src="/right-cable-newsletter.png" src="/right-cable-newsletter.png" alt="" className={styles.img2} style={{opacity: '1'}}></img>
        </section>
    )
}