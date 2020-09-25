import React from 'react'
import { Container, Icon, Title, List, Item, Link, Text, SubMenu } from './NavbarStyles'

function Navbar({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Navbar.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Navbar.Icon = function ({ src, children, ...restProps }) {
  return <Icon src={src} {...restProps} />
}
Navbar.List = function ({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}
Navbar.Item = function ({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}
Navbar.Link = function ({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
Navbar.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Navbar.SubMenu = function ({ children, ...restProps }) {
  return <SubMenu {...restProps}>{children}</SubMenu>
}
export default Navbar
