import React from 'react'
import styles from './style.module.css'

import NavigationBar from "../NavigationBar"

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
     <NavigationBar useThisStyle="footer" />
  </footer>
)

export default Footer