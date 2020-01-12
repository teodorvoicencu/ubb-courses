import * as React from 'react';
// eslint-disable-next-line import/order
import { useSelector } from 'react-redux';

import './styles/desktop.userProfilePage.scss';

const UserProfile = (): React.Node => {
    const user = useSelector(state => state.user.name);
    const email = useSelector(state => state.user.username);
    const imageUrl =
        // eslint-disable-next-line max-len
        'https://st4.depositphotos.com/1012074/20946/v/450/depositphotos_209469984-stock-illustration-flat-isolated-vector-illustration-icon.jpg';
    return (
        <div className="row fix justify-content-center mt-3 w-100">
            <img src={imageUrl} alt="" />
            <div className="row w-100 justify-content-center mt-3">
                <div className="box">
                    <div className="card-header text-center">
                        <h2>My Profile</h2>
                    </div>
                    <div className="cardBody">
                        <div className="row text-center m-3">
                            <div className="col-5">Name</div>
                            <div className="col text-left">{user}</div>
                        </div>
                        <div className="row text-center m-3">
                            <div className="col-5">Email</div>
                            <div className="col text-left">{email}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
