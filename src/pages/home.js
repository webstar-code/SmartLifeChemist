import React from 'react'
import BrandsContainer from '../container/BrandsContainer';
import ContactContainer from '../container/ContactContainer';
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
      <ContactContainer />
    </div>
  )
}

export default home
