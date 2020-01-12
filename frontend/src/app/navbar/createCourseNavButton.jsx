// @flow
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AuthorityTypes from '../types/authority';
import './styles/createCourseNavButton.scss';

const CreateCourseNavButton = (): React.Node => {
    const authorities = useSelector(state => state.user.authorities);
    return authorities.includes(AuthorityTypes.teacher) ? (
        <NavLink className={'btn btn-primary createButton'} to={'/courses/create'}>
            Create Course
        </NavLink>
    ) : null;
};

export default CreateCourseNavButton;
