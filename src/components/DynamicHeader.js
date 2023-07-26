'use client'
import NavButton from './NavButton'
import styles from './DynamicHeader.module.css'
import { navBarItems } from '../../lib/NavBarItems'
import { useEffect, useState } from 'react'
import { useStateContext, useDispatchContext } from '../../utils/reducerContext'
import { ACTIONS } from '../../utils/actions'

export default function DynamicHeader(){
    const state = useStateContext();
    const dispatch = useDispatchContext();

    useEffect(()=>{
        const trackScroll = (e) =>{
            if(e.target.lastChild.scrollTop === 0){
                dispatch({type: ACTIONS.SET_IS_TOP_OF_PAGE, payload: true})            
            }
            else{
                dispatch({type: ACTIONS.SET_IS_TOP_OF_PAGE, payload: false})     
            }
        }
        // on first load if page is re-loaded while scrolled
        if(window.document.lastChild.scrollTop !== 0){
            dispatch({type: ACTIONS.SET_IS_TOP_OF_PAGE, payload: false});
        }
        window.document.addEventListener('scroll', trackScroll);

        return ()=> window.document.removeEventListener('scroll', trackScroll)
    },[])

    return (
        <section 
            className={styles.container}
        >
            <p className={styles.shipping}>Free US Shipping over $30 — 60 Day Test Drive</p>
            <nav>
                <ul className={styles.nav}>
                    {navBarItems.map((item, i)=>{
                        return <NavButton key={i} navBarItem={item}/>
                    })}
                </ul>
            </nav>
        </section>
    )
}