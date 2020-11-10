import React from "react"
import HeaderFooter from "../layouts/HeaderFooter"
import TitlePage from "../modules/TitlePage"
import PageContent from "../modules/PageContent"

const IndexPage = () => (
  <HeaderFooter activeTab="Home">
    <TitlePage />
    <PageContent />
  </HeaderFooter>
)

export default IndexPage
