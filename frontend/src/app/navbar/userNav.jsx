// @flow
import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import {Button} from 'react-bootstrap';
import './styles/userNav.scss';
import {useDispatch, useSelector} from "react-redux";

import {UserActions} from "../redux/user";

const UserNav = (): React.Node => {
    const dispatch = useDispatch();
    const user =  useSelector(state=> state.user.name);

    const logOut = React.useCallback(() => dispatch(UserActions.logout()), [dispatch]);

    return (
        <>
            <Nav.Item className="userName">
                <Nav.Link eventKey="disabled" disabled>
                    {user}
                </Nav.Link>
            </Nav.Item>
            <Button as={Nav.Item} variant="outline-danger" onClick={logOut}>Log Out</Button>
        </>
    );
};

export default UserNav;
