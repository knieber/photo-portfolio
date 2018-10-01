import Head from './head'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className="site-header py-1 mt-5 mb-5">
    <div className="container d-flex flex-column flex-md-row">
      <Link prefetch href="/">
        <a className="">home</a>
      </Link>
      <Link prefetch href="/about">
        <a className="">about</a>
      </Link>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: 'Europa', sans-serif;
        font-size: 14px;
        letter-spacing: 0.04em;
        font-weight: 300;
        font-style: normal;
        color: #666;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
