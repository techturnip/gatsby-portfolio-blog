import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const { header, title, navList, navItem, activeNavItem } = headerStyles

  return (
    <header className={header}>
      <h1>
        <Link to="/" className={title}>
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul className={navList}>
          <li>
            <Link to="/" className={navItem} activeClassName={activeNavItem}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={navItem}
              activeClassName={activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={navItem}
              activeClassName={activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={navItem}
              activeClassName={activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
