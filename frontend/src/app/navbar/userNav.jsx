// @flow
import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import './styles/userNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { UserActions } from '../redux/user';
import { AppRoutes } from '../types';

import CreateCourseNavButton from './createCourseNavButton';

type Props = {
    location: any,
};

const UserNav = ({ location }: Props): React.Node => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.name);

    const profilePath = '/profile';

    const logOut = React.useCallback(() => dispatch(UserActions.logout()), [dispatch]);

    return (
        <>
            <Nav.Item className="userName">
                <NavLink
                    className="nav-link"
                    isActive={() => location.pathname === profilePath}
                    to={AppRoutes.PROFILE}
                    activeClassName="active"
                >
                    {user}
                </NavLink>
            </Nav.Item>
            <CreateCourseNavButton />
            <Button as={Nav.Item} variant="outline-danger" onClick={logOut}>
                Log Out
            </Button>
        </>
    );
};

export default UserNav;
