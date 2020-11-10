import React from 'react'
import NavigationHeader from "../components/NavigationHeader"
import Footer from "../components/Footer"

import React from 'react'

const headerFooter = ({children, activeTab}) => (
    <>
        <NavigationHeader activeTab={activeTab} />
        {children}
        <Footer />
    
    </>

)

export default headerFooter
