import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import PhotoGrid from '../components/photo-grid'

export default () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="container clearfix">
      <PhotoGrid />
    </div>
    <style jsx>{`
      img {
        height: auto;
        width: 100%;
      }

      .gallery_menu {
        margin-bottom: 100px;
      }

      .column_single_gallery_item {
        margin-bottom: 30px;
      }
    `}</style>
  </div>
)
