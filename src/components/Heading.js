import React from 'react'
import {Link} from 'react-router-dom';

import {Navbar , Nav , NavItem , Container , NavbarBrand} from 'reactstrap';

const Heading = () => {
  return (

    <Navbar color = "dark" >
        <Container>

            <NavbarBrand href = '/' >My List</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link className = "btn btn-primary" to = "/add"> Add User</Link>
                </NavItem>
            </Nav>

        </Container>

    </Navbar>
    
  )
}

export default Heading
