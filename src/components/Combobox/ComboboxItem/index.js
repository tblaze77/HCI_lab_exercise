import React from 'react'
 
import styles from './style.module.css'
 
const ComboboxItem = ({language, name, flag, setSelectedItem, selected}) => (
    <div key={name}
    className={`${styles.comboboxItem} ${selected ? styles.selected : ''}`} 
    onClick={() => setSelectedItem( {language, name})}>
        <span>{language}</span>
        <img src={flag} alt={name} />
    </div>
)
 
export default ComboboxItem