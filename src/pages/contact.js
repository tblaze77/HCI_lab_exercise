import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"

import ContactForm from "../modules/ContactForm";
import ContactSeparator from "../modules/ContactSeparator";
 
const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <ContactSeparator/>
        <ContactForm />
    </HeaderFooterLayout>
)
 
export default ContactPage