// @flow
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AuthorityTypes from '../types/authority';
import './styles/createCourseNavButton.scss';
import AppRoutes from '../types/appRoutes';

const CreateCourseNavButton = (): React.Node => {
    const authorities = useSelector(state => state.user.authorities);
    return authorities.includes(AuthorityTypes.TEACHER) ? (
        <NavLink className={'btn btn-success createButton'} to={AppRoutes.COURSE.CREATE}>
            Create Course
        </NavLink>
    ) : null;
};

export default CreateCourseNavButton;
