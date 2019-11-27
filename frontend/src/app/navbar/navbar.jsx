// @flow
import * as React from 'react';
import { Navbar } from 'react-bootstrap';
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
            <Nav>
                <NavLink to={'/login'} className="nav-link">
                    Login
                </NavLink>
            </Nav>
        </Navbar>
    );
};

export default NavbarTop;
