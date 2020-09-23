import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Sidebar } from '../components'
function NavbarContainer() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Navbar>
        {showSidebar ?
          <Navbar.Icon src="/images/icons/cancel.png" onClick={() => setShowSidebar(false)} />
          : <Navbar.Icon src="/images/icons/menu.png" onClick={() => setShowSidebar(true)} />
        }
        <Navbar.Title>SmartLifeChemist</Navbar.Title>
        <Navbar.List>
          {/* Mobile */}
          <Navbar.Icon src="/images/icons/phone.png" />
          <Navbar.Link href={"https://goo.gl/maps/3rCxs53HVmw3GfBb7"}>
            <Navbar.Icon src="/images/icons/location.png" />
          </Navbar.Link>
          {/* Desktop */}
          <Navbar.Text>Categories</Navbar.Text>
          <Navbar.Text>About Us</Navbar.Text>
          <Navbar.Text>Contact Us</Navbar.Text>
        </Navbar.List>
      </Navbar>

      <Sidebar active={showSidebar}>
        <Sidebar.List>
          <Sidebar.ListTitle>Cateogries</Sidebar.ListTitle>
          <Link to={"/medicines"}>
            <Sidebar.Item>
              <Sidebar.Text>Medicines</Sidebar.Text>
              <Sidebar.Icon src={"/images/icons/right-chevron.png"} />
            </Sidebar.Item>
          </Link>
          <Link to={"/cosmetics"}>
            <Sidebar.Item>
              <Sidebar.Text>Cosmetics</Sidebar.Text>
              <Sidebar.Icon src={"/images/icons/right-chevron.png"} />
            </Sidebar.Item>
          </Link>
        </Sidebar.List>
      </Sidebar>

    </>
  )
}

export default NavbarContainer
