'use client'
import styles from './HeaderWrapper.module.css'
import DynamicHeader from './DynamicHeader'
import FixedHeader from './FixedHeader'
import { useStateContext } from '../../utils/reducerContext'

export default function HeaderWrapper({ children }){
    const state = useStateContext();
    return (
        <div 
            className={styles.wrapper}
            style={{
                transform: (state.isTopOfPage || state.isDropdownOpen) ? 'translateY(0)' : 'translateY(-48px)'
            }}
        >
            {children}
        </div>
    )
}