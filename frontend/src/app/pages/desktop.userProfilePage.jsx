import * as React from 'react';

import UserProfileImage from '../user/userProfileImage';
import UserProfileDetails from '../user/userProfileDetails';

const UserProfilePage = (): React.Node => {
    const imageUrl =
        'https://st4.depositphotos.com/1012074/20946/v/450/depositphotos_209469984-' +
        'stock-illustration-flat-isolated-vector-illustration-icon.jpg';
    return (
        <>
            <UserProfileImage imageUrl={imageUrl} />
            <UserProfileDetails />
        </>
    );
};

export default UserProfilePage;
