import React from 'react'
import NavigationHeader from "../modules/NavigationHeader"
import Footer from "../modules/Footer"

import React from 'react'

const headerFooter = ({children, activeTab}) => (
    <>
        <NavigationHeader activeTab={activeTab} />
        {children}
        <Footer />
    
    </>

)

export default headerFooter
