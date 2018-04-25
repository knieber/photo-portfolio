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
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <Link prefetch href="/">
        <a className="py-2">Home</a>
      </Link>
      <Link prefetch href="/about">
        <a className="py-2">About</a>
      </Link>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
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
