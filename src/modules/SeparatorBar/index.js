import React from 'react'
 
import styles from './style.module.css'
 
const ContactSeparator = ({text}) => (
    <section className={styles.separator}>
        <div className={styles.horizontalLine} />
        <h2>{text}</h2>
        <div className={styles.horizontalLine} />
    </section>
)
 
export default ContactSeparator