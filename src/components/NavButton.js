'use client'
import styles from './NavButton.module.css'
import { useRef, useState } from 'react'
import { useStateContext, useDispatchContext } from '../../utils/reducerContext';
import { ACTIONS } from '../../utils/actions';

export default function NavButton({navBarItem}){
    const state = useStateContext();
    const dispatch = useDispatchContext();
    const navRef = useRef();

    function handleClick(e){
        dispatch({type: ACTIONS.SET_SELECTED_NAV, payload: e.currentTarget});
        if(e.target === state.selectedNav && state.isDropdownOpen){
            dispatch({type: ACTIONS.SET_IS_DROPDOWN_OPEN, payload: false});
            //hacky workaround to keep dynamic header from disapearing immediately after nav dropdown de-selection
            dispatch({type: ACTIONS.SET_IS_TOP_OF_PAGE, payload: true});
        }
        else{
            dispatch({type: ACTIONS.SET_IS_DROPDOWN_OPEN, payload: true});
        }
    }
    return (
        <div className={styles.buttonWrapper}>
            <button 
                className={styles.navButton}
                onClick={handleClick}
                ref={navRef}
                style={{
                    color: (state.selectedNav === navRef.current && state.isDropdownOpen) ? 'white' : 'rgb(190, 190, 190)'
                }}
            >
                {navBarItem.title}
                <svg style ={{
                    transform: (state.isDropdownOpen && state.selectedNav === navRef.current) ? 'rotate(180deg)' : 'rotate(0deg)',
                    transformOrigin: '50% 50%'
                }}
                className={styles.svg} 
                xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            {(state.isDropdownOpen && state.selectedNav === navRef.current) && 
                <div className={styles.dropdown}>
                    {navBarItem.listItems.map((listItem, i)=>{
                        return (<>
                            {((navBarItem.title ==='US/EN')&&(i===0 || i===3)) ? 
                            <a 
                            key={i}
                            className={styles.listItem}
                            href={`/${listItem}`}
                            style={{
                                color: '#fff',
                                fontFamily: 'var(--themeFontMd)',
                                fontStyle:'normal',
                                fontWeight: '400',
                            }}
                        >{listItem}</a>
                            :
                            <a 
                                        key={i}
                                        className={styles.listItem}
                                        href={`/${listItem}`}
                                        style={{
                                            marginBottom: ((navBarItem.title ==='US/EN') && (i === 2)) ? '32px' : 'none'
                                        }}
                                    >{listItem}</a>
                            
                        }
                        </>
                    )})}
                </div>
            }
        </div>
    )
}