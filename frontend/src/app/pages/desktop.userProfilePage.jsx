import * as React from 'react';

import UserProfileImage from '../user/userProfileImage';
import UserProfileDetails from '../user/userProfileDetails';

const UserProfilePage = (): React.Node => {
    return (
        <>
            <UserProfileImage />
            <UserProfileDetails />
        </>
    );
};

export default UserProfilePage;
