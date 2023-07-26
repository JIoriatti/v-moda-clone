'use client'
import styles from './Welcome.module.css'
import { motion, AnimatePresence, cubicBezier } from 'framer-motion'

const easing = cubicBezier(.645,.045,.355,1);
const fadeIn = {
    initial: {
        header: {opacity: 0, y: 25, originY: 1},
        subHeader: {opacity: 0, y: 35, originY: 1},
        button: {opacity: 0, y: 40, originY: 1}
    },
    animate: {
        opacity: 1,
        y: 0
    },
    transition: {
        delay: 0.2,
        duration: 1,
        ease: 'easeOut',
    }
}

export default function Welcome(){
    return (
        <div className={styles.intro}>
            <AnimatePresence>
                <motion.h1 
                    className={styles.header}
                    initial={fadeIn.initial.header}
                    animate={fadeIn.animate}
                    transition={fadeIn.transition}
                >Elevate Your Performance.</motion.h1>
                <motion.p 
                    className={styles.subHeader}
                    initial={fadeIn.initial.subHeader}
                    animate={fadeIn.animate}
                    transition={{...fadeIn.transition, delay: 0.3}}
                >Unleash the power of precision and clarity with our cutting-edge DJ headphones.</motion.p>
                <motion.button 
                    className={styles.discoverBtn}
                    initial={fadeIn.initial.button}
                    animate={fadeIn.animate}
                    transition={{...fadeIn.transition, delay: 0.4}}
                >Discover all products</motion.button>
            </AnimatePresence>
        </div>
    )
}