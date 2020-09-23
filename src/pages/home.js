import React from 'react'
// import HeroBannerContainer from '../container/HeroBannerContainer';
import NavbarContainer from '../container/NavbarContainer';
import ServicesContainer from '../container/ServicesContainer';

function home() {
  return (
    <div>
      <NavbarContainer />
      {/* <HeroBannerContainer /> */}
      <ServicesContainer />
    </div>
  )
}

export default home
