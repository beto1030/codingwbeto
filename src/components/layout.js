import * as React from "react"

import Navbar from "./Navbar"

import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {

  const rootPath = `${__PATH_PREFIX__}/`
  
  const locationPathname = location.pathname

  const isRootPath = locationPathname === rootPath

  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="container" data-is-root-path={isRootPath}>
      <Navbar />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Alberto Alvarado
      </footer>
    </div>
  )
}

export default Layout
