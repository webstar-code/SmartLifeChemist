import React from 'react'
import { Container, Header, Title, Pane, Text, Item, Icon, Map, Details } from './ContactStyles'

function Contact({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Contact.Header = function ({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}
Contact.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Contact.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Contact.Pane = function ({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
Contact.Details = function ({ children, ...restProps }) {
  return <Details {...restProps}>{children}</Details>
}
Contact.Item = function ({ ...restProps }) {
  return <Item {...restProps} />
}
Contact.Icon = function ({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>
}
Contact.Map = function ({ children, ...restProps }) {
  return <Map {...restProps}>{children}</Map>
}



export default Contact
