import Masonry from 'react-masonry-component'

const images = [
  {
    key: 1,
    url:
      'https://kylenieberphotography.imgix.net/DSCF2451.jpg?auto=format&q=85&w=600',
  },
  {
    key: 2,
    url:
      'https://kylenieberphotography.imgix.net/DSCF5033.jpg?auto=format&q=85&w=600',
  },
  {
    key: 3,
    url:
      'https://kylenieberphotography.imgix.net/DSCF4505.jpg?auto=format&q=85&w=600',
  },
  {
    key: 4,
    url:
      'https://kylenieberphotography.imgix.net/DSCF3312.jpg?auto=format&q=85&w=600',
  },
  {
    key: 5,
    url:
      'https://kylenieberphotography.imgix.net/DSCF3021.jpg?auto=format&q=85&w=600',
  },
  {
    key: 6,
    url:
      'https://kylenieberphotography.imgix.net/DSCF3407.jpg?auto=format&q=85&w=600',
  },
  {
    key: 7,
    url:
      'https://kylenieberphotography.imgix.net/DSCF4727.jpg?auto=format&q=85&w=600',
  },
  {
    key: 8,
    url:
      'https://kylenieberphotography.imgix.net/DSCF4531.jpg?auto=format&q=85&w=600',
  },
  {
    key: 9,
    url:
      'https://kylenieberphotography.imgix.net/DSCF3854.jpg?auto=format&q=85&w=600',
  },
  {
    key: 10,
    url:
      'https://kylenieberphotography.imgix.net/DSCF4383.jpg?auto=format&q=85&w=600',
  },
  {
    key: 11,
    url:
      'https://kylenieberphotography.imgix.net/DSCF5378.jpg?auto=format&q=85&w=600',
  },
  {
    key: 12,
    url:
      'https://kylenieberphotography.imgix.net/DSCF5281.jpg?auto=format&q=85&w=600',
  },
]

const childElements = images.map(image => (
  <div
    className="col-12 col-sm-12 col-md-6 col-lg-4"
    style={{ marginBottom: '30px' }}
    key={image.key}
  >
    <img src={image.url} alt="" style={{ height: 'auto', width: '100%' }} />
    <div className="hover_overlay">
      <a className="gallery_img" href="/static/p6.jpg">
        <i className="fa fa-eye" />
      </a>
    </div>
  </div>
))

const PhotoGrid = () => (
  <Masonry
    className={'row'}
    elementType={'div'}
    options={{
      transitionDuration: 0,
    }}
    disableImagesLoaded={false}
    updateOnEachImageLoad={false}
    imagesLoadedOptions={{}}
  >
    {childElements}
  </Masonry>
)

export default PhotoGrid
