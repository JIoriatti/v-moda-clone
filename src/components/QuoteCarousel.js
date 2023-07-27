'use client'
import { useRef, useEffect, useState } from 'react'
import styles from './QuoteCarousel.module.css'

export default function QuoteCarousel(){
    const carousel = useRef();
    const [savedObserver, setSavedObserver] = useState(null);

    async function initFlickity() {
        if (typeof window !== 'undefined' && carousel.current) {
            const Flickity = (await import('flickity')).default;
            new Flickity(carousel.current, {
                lazyLoad: true,
                wrapAround: false,
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
        buttons[2].appendChild(doc.documentElement);
        buttons[3].appendChild(docCopy);
        buttons.forEach((button)=>{
            button.classList.add('prev-next-btn');  
        })
        buttons[2].removeAttribute('disabled');
        buttons[3].removeAttribute('disabled');

        const dots = document.querySelectorAll('.flickity-page-dots');
        dots[1].classList.add('quoteDots');

        // using mutation observer to remove disabled attribute when slides
        // reach beginning/end
        const mutationCallback = (mutationList, observer) => {
            for (const mutation of mutationList){
                if(mutation.attributeName === 'disabled'){
                    mutation.target.removeAttribute('disabled');
                }
            }
        }
        const observer = new MutationObserver(mutationCallback);
        setSavedObserver(observer);
        observer.observe(buttons[2], {attributes: true});
        observer.observe(buttons[3], {attributes: true});
    }

    
    useEffect(() => {
        initFlickity();

        // return ()=> savedObserver.disconnect();
    }, []);

    return(
        <div className={styles.carouselSection}>
                <div ref={carousel} className={styles.carousel}>
                    <div className={styles.quoteRow}>
                        <blockquote className={styles.blockquote}>
                            <p className={styles.quote}>{`"The Versace of the Headphone World"`}</p>
                        </blockquote>
                        <p className={styles.author}>Headphones Compared</p>
                    </div>
                    <div className={styles.quoteRow}>
                        <blockquote className={styles.blockquote}>
                            <p className={styles.quote}>{`"The quality you get from V-MODA is second to none"`}</p>
                        </blockquote>
                        <p className={styles.author}>KSHMR</p>
                    </div>
                    <div className={styles.quoteRow}>
                        <blockquote className={styles.blockquote}>
                            <p className={styles.quote}>{`"DJs and musicians gravitate toward V-MODA for its durable construction and phenomenal warranty program"`}</p>
                        </blockquote>
                        <p className={styles.author}>Sound Guys</p>
                    </div>
                    <div className={styles.quoteRow}>
                        <blockquote className={styles.blockquote}>
                            <p className={styles.quote}>{`"If Maserati made headphones, they'd be V-MODA"`}</p>
                        </blockquote>
                        <p className={styles.author}>Digital Trends</p>
                    </div>
                    <div className={styles.quoteRow}>
                        <blockquote className={styles.blockquote}>
                            <p className={styles.quote}>{`"Thank you for bringing my studio wherever I go"`}</p>
                        </blockquote>
                        <p className={styles.author}>DJ Jazzy Jeff</p>
                    </div>
                </div>
            </div>
    )
}