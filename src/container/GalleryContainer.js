import React, { useState, useEffect } from 'react'
import Photos from '../fixtures/photos.json';
import { Gallery } from '../components'
function GalleryContainer() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentImage, setcurrentImage] = useState(Photos[slideIndex]);

  const ValidateIndex = (index) => {
    if (slideIndex > Photos.length - 2) {
      setSlideIndex(0);
    } else if (slideIndex < 1) { setSlideIndex(Photos.length - 1); }
    else {
      setSlideIndex(index);
    }
  }

  useEffect(() => {
    setcurrentImage(Photos[slideIndex]);
  }, [slideIndex]);

  return (
    <div>
      <Gallery>
        <Gallery.Image key={currentImage.id} src={currentImage.image} />
        <Gallery.Icon src="/images/icons/left-chevron.png" left="50px"
          onClick={() => ValidateIndex(slideIndex - 1)} />
        <Gallery.Icon src="/images/icons/right-chevron.png" right="50px"
          onClick={() => ValidateIndex(slideIndex + 1)} />
      </Gallery>
    </div>
  )
}

export default GalleryContainer
