import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div>
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
