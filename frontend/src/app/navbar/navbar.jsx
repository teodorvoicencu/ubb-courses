// @flow
import * as React from 'react';
import { Button, Form, FormControl, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';

import NavRoutes from '../routes/navRoutes';

const NavbarTop = (): React.Node => {
    const location = useLocation();

    const links = Object.keys(NavRoutes).map((key, index) => {
        const route = NavRoutes[key];
        return (
            <NavLink
                isActive={() => location.pathname === route.path}
                key={index}
                to={route.path}
                className="nav-link"
                activeClassName="active"
            >
                {route.name}
            </NavLink>
        );
    });

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>UBB Courses</Navbar.Brand>
            <Nav className="mr-auto">{links}</Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
};

export default NavbarTop;
