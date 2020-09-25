import React from 'react'
import BrandsContainer from '../container/BrandsContainer';
import ContactContainer from '../container/ContactContainer';
import GalleryContainer from '../container/GalleryContainer';
import HeroBannerContainer from '../container/HeroBannerContainer';
import NavbarContainer from '../container/NavbarContainer';
import ServicesContainer from '../container/ServicesContainer';

function home() {
  return (
    <div>
      <NavbarContainer />
      <HeroBannerContainer />
      <ServicesContainer />
      <BrandsContainer />
      <GalleryContainer />
      <ContactContainer />
    </div>
  )
}

export default home
