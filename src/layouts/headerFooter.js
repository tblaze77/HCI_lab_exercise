import React from 'react'
import NavigationHeader from "../modules/NavigationHeader"
import Footer from "../modules/Footer"



const HeaderFooter = ({children, activeTab}) => (
    <>
        <NavigationHeader activeTab={activeTab} />
            {children}
        <Footer />
    
    </>

)

export default HeaderFooter
