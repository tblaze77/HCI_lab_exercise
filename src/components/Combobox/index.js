import React from 'react'
 
import { languages } from '../../constants/const'
import ComboboxItem from './ComboboxItem'
import styles from './style.module.css' 
 
const Combobox = () =>(
    <div className={styles.combobox}>
        {<ul>
          {languages.map(el => 
            <ComboboxItem language={el.language}
              name={el.name} 
              flag={el.flag} />)}
        </ul>
        }
    </div>
)
 
export default Combobox