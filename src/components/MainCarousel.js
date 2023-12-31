'use client'
import styles from './MainCarousel.module.css'
import { useEffect, useRef, useState } from 'react';
import 'flickity/css/flickity.css'

export default function MainCarousel() {
    const carousel = useRef(null);

    async function initFlickity() {
        if (typeof window !== 'undefined' && carousel.current) {
            const Flickity = (await import('flickity')).default;
            new Flickity(carousel.current, {
                lazyLoad: true,
                wrapAround: true,
                autoPlay: false,
                prevNextButtons: true,
                pageDots: true,
                cellAlign: 'left',
                contain: true,
            });
        }
        const container = document.querySelector('.flickity-enabled');
        const slider = document.querySelector('.flickity-slider');
        const viewport = document.querySelector('.flickity-viewport');
        container.classList.add('carouselContainer');
        slider.classList.add('slider');
        viewport.classList.add('viewport');
       
        const prevSvg = document.querySelectorAll('.flickity-button-icon');
        prevSvg.forEach((el)=> el.remove());
        const parser = new DOMParser();
        const doc = parser.parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', 'image/svg+xml')
        const buttons = document.querySelectorAll('.flickity-button');
        const docCopyChildren = doc.documentElement.children;
        let docCopy = doc.documentElement.cloneNode();
        let lineCopy = docCopyChildren.item(0).cloneNode();
        let pathCopy = docCopyChildren.item(1).cloneNode();
        docCopy.appendChild(lineCopy);
        docCopy.appendChild(pathCopy);
        docCopy.style.transform = 'rotate(180deg)'
        docCopy.classList.add('prev-next');
        doc.documentElement.classList.add('prev-next');
        buttons[0].appendChild(doc.documentElement);
        buttons[1].appendChild(docCopy);
        buttons.forEach((button)=>{
            button.classList.add('prev-next-btn');  
        })
    }

    useEffect(() => {
        initFlickity();
    }, []);

    return (
        <div className={styles.carouselSection}>
            <div ref={carousel} className={styles.carousel}>
                <div className={styles.row}>
                    <div className={styles.rowImage}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.img} src="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block_item/image/18/XFBT2-promo.jpg" />
                        </div>
                    </div>
                    <div className={styles.rowContent}>
                        <h3 className={styles.contentHeader}>Limited Time Offer</h3>
                        <h2 className={styles.contentTitle}>Crossfade 2 Wireless</h2>
                        <p className={styles.contentText}>Crossfade 2 Wireless are now 17% off. <br />
                            Get a pair of these customizable Bluetooth headphones before it’s too late. <br />
                            Hurry up till stock lasts! <br /> <br />
                        </p>
                        <a 
                            className={styles.shop}
                            href='/'
                        ><p
                        style={{
                            width: '100%',
                            paddingTop: '9px'
                        }}
                        >Shop now</p></a>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.rowImage}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.img} src="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block_item/image/6/XFBT2A-30OFF-01.jpg" />
                        </div>
                    </div>
                    <div className={styles.rowContent}>
                        <h3 className={styles.contentHeader}>Limited Time Offer</h3>
                        <h2 className={styles.contentTitle}>Crossfade 2 Wireless Codex Edition</h2>
                        <p className={styles.contentText}>Up to 20% off on our Crossfade 2 Wireless Codex Edition. <br />
                            Exceptional features at an exceptional price. <br />
                            Hurry up till stock lasts! <br /> <br />
                        </p>
                        <a 
                            className={styles.shop}
                            href='/'
                        ><p
                        style={{
                            width: '100%',
                            paddingTop: '9px'
                        }}
                        >Shop now</p></a>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.rowImage}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.img} src="https://d2pz7ev4hh4qcl.cloudfront.net/assets/home_page_block_item/image/64/Forza-homepage.jpg" />
                        </div>
                    </div>
                    <div className={styles.rowContent}>
                        <h3 className={styles.contentHeader}>Discover</h3>
                        <h2 className={styles.contentTitle}>V-MODA Sale Section</h2>
                        <p className={styles.contentText}>The best products, at the best prices. <br />
                                <br />
                        </p>
                        <a 
                            className={styles.shop}
                            href='/'
                        ><p
                        style={{
                            width: '100%',
                            paddingTop: '9px'
                        }}
                        >View all offers</p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}