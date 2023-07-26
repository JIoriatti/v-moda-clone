'use client'
import styles from './FixedHeader.module.css'
import { useStateContext, useDispatchContext } from '../../utils/reducerContext'
import { useRef } from 'react';

export default function FixedHeader(){
    const state = useStateContext();
    const headerRef = useRef(null);

    return(
        <section 
            className={styles.container}
            style={{
                background: state.isTopOfPage ? 'transparent' : 'white',
                color: state.isTopOfPage ? 'white' : 'black',
            }}
            ref={headerRef}
        >
            <a className={styles.logoLink} href="/">
                <svg className={styles.logo} width="120" height="27" viewBox="0 0 120 27" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="logoTitle" alt="V-Moda Logo">
                    <title id="logoTitle">V-Moda Logo</title>
                    <g clipPath="url(#clip0)">
                    <path d="M11.4629 17.8543L6.03599 14.0322H0V20.4478L11.4905 26.9999L22.9257 20.4751L22.9811 20.4478V14.0322H16.9174L11.4629 17.8543ZM21.7628 15.2334V19.7653L11.4905 25.6349L1.19059 19.7653V15.2334H5.64836L11.4629 19.3012L17.305 15.2334H21.7628Z" fill="#e1251b"></path>
                    <path d="M11.5182 0.0273003L11.4905 0L0.0553761 6.52477H0V12.1759H6.17444L11.4352 15.9161L16.7236 12.1759H22.9811V6.52477L11.5182 0.0273003ZM11.4352 14.4692L6.56207 11.002H1.19059V7.20728L11.4905 1.36502L21.7905 7.23458V11.002H16.3359L11.4352 14.4692Z" fill="#e1251b"></path>
                    <path d="M39.9531 15.9158H45.38V12.1211H41.4483L39.9531 15.9158Z" fill="#e1251b"></path>
                    <path d="M88.1029 13.3496C88.1029 13.1858 88.1029 13.0493 88.1029 12.8855C87.9644 8.27176 85.8048 5.37793 80.461 5.37793C80.461 5.37793 80.461 5.37793 80.4333 5.37793C80.4333 5.37793 80.4333 5.37793 80.4056 5.37793C75.0895 5.37793 72.9021 8.27176 72.7637 12.8855C72.7637 13.022 72.7637 13.1858 72.7637 13.3496V13.3769V13.4042C72.7637 13.568 72.7637 13.7045 72.7637 13.8683C72.9021 18.4821 75.0618 21.3759 80.4056 21.3759C80.4056 21.3759 80.4056 21.3759 80.4333 21.3759C80.4333 21.3759 80.4333 21.3759 80.461 21.3759C85.7771 21.3759 87.9644 18.4821 88.1029 13.8683C88.1029 13.7318 88.1029 13.568 88.1029 13.4042V13.3769V13.3496ZM81.9007 18.018C81.7346 18.1272 81.5685 18.2091 81.3747 18.2637C80.7655 18.4821 80.101 18.4821 79.4919 18.2637C79.3257 18.2091 79.1319 18.1272 78.9658 18.018C77.969 17.3628 77.2491 15.8885 77.2215 13.3769C77.2491 10.8653 77.969 9.39107 78.9658 8.73587C79.1319 8.62667 79.2981 8.54476 79.4919 8.49016C80.101 8.27176 80.7655 8.27176 81.3747 8.49016C81.5408 8.54476 81.7346 8.62667 81.8731 8.73587C82.8698 9.39107 83.5897 10.8653 83.6174 13.3769C83.6174 15.8885 82.9252 17.3628 81.9007 18.018Z" fill="#e1251b"></path>
                    <path d="M70.9641 12.0392C70.9641 11.0564 70.9641 10.3739 70.9364 10.2101C70.9364 8.40831 69.8566 5.40527 65.8418 5.40527C63.5714 5.40527 62.1316 6.44269 60.5257 7.6166C59.695 6.36078 58.3383 5.40527 56.1233 5.40527C53.7698 5.40527 52.3577 6.44269 50.641 7.7258L49.9765 5.95128H47.1523V20.8572H51.6101V9.85522C52.8838 9.09081 53.4929 8.79051 54.462 8.79051C56.9539 8.79051 56.7601 10.5923 56.7601 12.285V20.8299H61.2456V9.88252C62.4915 9.09082 63.1837 8.79051 64.1251 8.79051C66.6171 8.79051 66.4232 10.5923 66.4232 12.285V20.8299H70.9364V12.1484C70.9641 12.0938 70.9641 12.0665 70.9641 12.0392Z" fill="#e1251b"></path>
                    <path d="M104.551 5.37836V4.06794V1.96582H100.065V5.37836C98.2932 5.37836 96.9088 5.37836 96.3827 5.37836C92.2849 5.37836 89.793 8.40869 89.793 13.2954C89.793 18.3187 92.1465 21.3763 96.1612 21.3763C98.1825 21.3763 99.9822 20.803 101.477 19.5745L101.893 20.8303H104.523V11.3025V8.40869V5.37836H104.551ZM100.093 17.4451C99.29 17.9638 98.404 18.1822 97.601 18.1822C95.4967 18.1822 94.3615 16.6534 94.3615 12.9678C94.3615 9.71911 95.2475 8.40869 97.8779 8.40869H100.121V17.4451H100.093Z" fill="#e1251b"></path>
                    <path d="M114.075 5.37793C113.327 5.37793 110.78 5.40523 107.873 5.62363V8.38096C108.62 8.38096 111.666 8.40826 113.3 8.40826C115.764 8.40826 115.598 9.58218 115.598 11.7389C114.739 11.657 114.186 11.6297 113.438 11.6024C108.648 11.4386 106.322 12.749 106.322 16.4892C106.322 19.6014 108.703 21.2394 111.057 21.3486C113.715 21.4851 115.127 21.021 116.982 19.5741L117.397 20.8299L120.028 20.8572V11.2202C120 7.15245 118.56 5.37793 114.075 5.37793ZM110.559 16.298C110.559 14.7692 111.14 13.8956 115.57 14.2505V17.5266C114.739 17.9361 114.02 18.2364 112.995 18.2637C112.607 18.291 110.559 18.3456 110.559 16.298Z" fill="#e1251b"></path>
                    <path d="M37.4075 6.00586L34.2234 15.9432L31.0392 6.00586H26.4707L32.4236 20.8299H36.0231L41.976 6.00586H37.4075Z" fill="#e1251b"></path>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="120" height="27" fill="white"></rect>
                    </clipPath>
                    </defs>
                </svg>
            </a>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.navItem} data-color={state.isTopOfPage ? 'white' : 'black'}>Headphones</li>
                    <li className={styles.navItem} data-color={state.isTopOfPage ? 'white' : 'black'}>Accessories</li>
                    <li className={styles.navItem} data-color={state.isTopOfPage ? 'white' : 'black'}>Shop By</li>
                    <li className={styles.navItem} data-color={state.isTopOfPage ? 'white' : 'black'}>Customization</li>
                    <li className={styles.navItem} data-color={state.isTopOfPage ? 'white' : 'black'}>Sale</li>
                </ul>
            </nav>
            <div className={styles.navIconContainer}>
                <svg className={styles.navIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{color: state.isTopOfPage ? 'white' : 'black'}}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <svg className={styles.navIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: state.isTopOfPage ? 'white' : 'black' }}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <svg className={styles.navIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  aria-hidden="true" style={{color: state.isTopOfPage ? 'white' : 'black'}}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </div>
        </section>
    )
}