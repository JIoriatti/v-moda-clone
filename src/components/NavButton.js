'use client'
import styles from './NavButton.module.css'
import { useState } from 'react'

export default function NavButton({navBarItem}){
    const [isNavItemExpanded, setIsNavItemExpanded] = useState(false);
    function handleClick(){
        setIsNavItemExpanded(!isNavItemExpanded)
    }
    return (
        <>
            <button 
                className={styles.navButton}
                onClick={handleClick}
            >
                {navBarItem.title}
                <svg style ={{
                    transform: isNavItemExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s linear'
                }}
                className={styles.svg} 
                xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            {isNavItemExpanded &&
                <div className={styles.dropdown}>
                    {navBarItem.listItems.map((listItem, i)=>{
                        return <a 
                                    key={i}
                                    className={styles.listItem}
                                    href={`/${listItem}`}
                                >{listItem}</a>
                    })}
                </div>
            }
        </>
    )
}