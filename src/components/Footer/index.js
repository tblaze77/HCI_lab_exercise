import React from 'react'
import styles from './style.module.css'

const navTabs = ['Home', 'Accommodation', 'Photo Gallery', 'Contact']

const Footer = () => (
  <footer className={styles.footer}>
      <ul className={styles.address}>
          <li className={styles.title}>
              Venice Beach
          </li>
          <li>San Fierro Road </li>
          <li>Los Santos 555</li>
          <li className={styles.phone}>
              +385 99 11223344
          </li>
          <li>example@email.com</li>
      </ul>
      <ul className={styles.navigation}>
          {navTabs.map(tab =>
            <li>{tab}</li>)
          }
      </ul>
  </footer>
)

export default Footer