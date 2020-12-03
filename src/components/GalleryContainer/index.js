import React from 'react'
 
import styles from './style.module.css'
import ImagePool from "../ImagePool"
 
const GalleryContainer = ({title}) => (
    <section className={styles.galleryContainer}>
        <h1>{title}</h1>
        <ImagePool start={0} end={3} />
    </section>
)
 
export default GalleryContainer