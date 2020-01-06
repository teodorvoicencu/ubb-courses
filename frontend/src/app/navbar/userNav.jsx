// @flow
import * as React from 'React';
import {useSelector} from 'react-redux';

const UserNav = ():React.Node => {
    const isLoggedIn = useSelector(state => state.user.loggedIn);
    return null;
};

export default UserNav;