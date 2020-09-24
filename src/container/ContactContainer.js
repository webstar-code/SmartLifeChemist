import React from 'react'

import { Contact } from '../components';

function ContactContainer() {
  return (
    <>
      <Contact.Header>Contact Us</Contact.Header>

      <Contact>
        <Contact.Pane direction="column">
          <Contact.Title>SmartLifeChemist</Contact.Title>
          <Contact.Text>Shop No. 1, S.No. 87,
          Near Ganraj Mangal Karyalaya,
          Mahalunge Road, Baner, Pune-411045</Contact.Text>
          <Contact.Pane direction="row">
            <Contact.Text>Contact: </Contact.Text>
            <Contact.Pane direction="column">
              <Contact.Item>
                <Contact.Icon src={"/images/icons/phone.png"} />
                <Contact.Text>7066397444</Contact.Text>
              </Contact.Item>
              <Contact.Item>
                <Contact.Icon src={"/images/icons/whatsapp.png"} />
                <Contact.Text>7066397333</Contact.Text>
              </Contact.Item>
              <Contact.Item>
                <Contact.Icon src={"/images/icons/gmail.png"} />
                <Contact.Text>Smartlc1200@gmail.com</Contact.Text>
              </Contact.Item>
            </Contact.Pane>
          </Contact.Pane>
        </Contact.Pane>

        <Contact.Pane>
          <Contact.Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2224759571054!2d73.77395411399281!3d18.564006087383746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becbeedb93d9%3A0x1f43e11574f2ee11!2sSmart%20Life%20Chemist!5e0!3m2!1sen!2sin!4v1600966191321!5m2!1sen!2sin"
            width="400px" height="300px"
          >
          </Contact.Map>
        </Contact.Pane>

      </Contact>
    </>
  )
}

export default ContactContainer
