import React from 'react'
import {Container,  Icon, Image} from './GalleryStyles'

function Gallery({children, ...restProps}) {
  return (
      <Container {...restProps}>{children}</Container>
  )
}

Gallery.Icon = function ({...restProps}) {
  return <Icon {...restProps} />
}

Gallery.Image = function ({...restProps}) {
  return <Image {...restProps} />
}
export default Gallery
