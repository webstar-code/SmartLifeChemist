import React from 'react'
import brandicons from '../fixtures/brandicons.json'
import { Brands } from '../components';


function BrandsContainer() {
  return (
    <div>
      <Brands>

        <Brands.Row speed="5s">
          {brandicons.slice(0, 9).map(item => (
            <Brands.Icon key={item.id} src={item.image} />
          ))}
        </Brands.Row>
        <Brands.Row speed="8s" marginLeft="50px">
          {brandicons.slice(10, 19).map(item => (
            <Brands.Icon key={item.id} src={item.image} />
          ))}
        </Brands.Row>
        {/* <Brands.Row>
          {brandicons.slice(20, 28).map(item => (
            <Brands.Icon key={item.id} src={item.image} />
          ))}
        </Brands.Row> */}
      </Brands>

    </div>
  )
}

export default BrandsContainer
