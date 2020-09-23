import React from 'react'
import { Container, Item, Inner,  Header, Pane, Title, Subtitle, Image } from './ServiceStyles';

function Service({direction, children, ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>
      {children}
      </Inner>
    </Item>
  )
}

Service.Container = function ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Service.Header = function ({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}
Service.Pane = function ({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
Service.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Service.Subtitle = function ({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}
Service.Image = function ({ children, ...restProps }) {
  return <Image {...restProps} />
}





export default Service
