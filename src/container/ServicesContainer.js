import React from 'react'
import { Service } from '../components'
import servies from '../fixtures/servies.json';

function ServicesContainer() {
  return (
    <Service.Container>
      <Service.Header>Our Services</Service.Header>
      {servies.map(item => (
        <Service key={item.id} direction={item.direction}>
          <Service.Pane>
            <Service.Image src={item.image} alt={item.alt} />
          </Service.Pane>
          <Service.Pane>
            <Service.Title>{item.title}</Service.Title>
            <Service.Subtitle>{item.subtitle}</Service.Subtitle>
          </Service.Pane>

        </Service>
      ))}
    </Service.Container>
  )
}

export default ServicesContainer
