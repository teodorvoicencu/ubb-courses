import React from 'react'

import {Navbar, Nav} from 'react-bootstrap';


function TopNavBar(){
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Courses</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Info">Info</Nav.Link>
            </Nav>
        </Navbar>
        </>
    )
}

export default TopNavBar;