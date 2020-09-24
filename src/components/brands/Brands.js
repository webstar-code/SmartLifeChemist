import React from 'react'
import { Container, Inner, Row, Icon } from './BrandsStyles';

function Brands({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>
        {children}
      </Inner>
    </Container>

  )
}


Brands.Row = function ({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}
Brands.Icon = function ({ ...restProps }) {
  return <Icon {...restProps} />
}
export default Brands
