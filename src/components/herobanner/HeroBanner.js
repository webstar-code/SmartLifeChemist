import React from 'react'
import {Container,  GIF, Image, Title } from './HeroBannerStyles';

function HeroBanner({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <GIF src={"/images/drugstore.gif"}/>
      <Image src="/images/drug.png" />
      {children}
    </Container>
  )
}

HeroBanner.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

export default HeroBanner
