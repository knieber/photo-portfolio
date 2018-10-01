import Head from '../components/head'
import Nav from '../components/nav'
export default () => (
  <div>
    <Head title="About" />
    <Nav />
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="https://kylenieberphotography.imgix.net/DSCF2715.jpg?auto=format&q=85&w=600" />
        </div>
        <div className="col-12 col-md-6">
          <p>What's there to say? I am who I am who I am.</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      img {
        height: auto;
        width: 100%;
      }
      p {
        font-family: 'Europa', sans-serif;
        font-size: 14px;
        letter-spacing: 0.04em;
        font-weight: 300;
        font-style: normal;
        color: #666;
      }
    `}</style>
  </div>
)
