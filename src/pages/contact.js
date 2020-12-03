import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"

import ContactForm from "../modules/ContactForm";
import SeparatorBar from "../modules/SeparatorBar";
 
const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <SeparatorBar text="contact"/>
        <ContactForm />
    </HeaderFooterLayout>
)
 
export default ContactPage