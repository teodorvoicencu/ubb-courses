// @flow
import { Button, Card } from 'react-bootstrap';
import * as React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './styles/courseHeaderSummary.scss';

import { AppRoutes } from '../types';
import { CourseActions } from '../redux/course';

const isEnrolled = false;

type Props = {
    id: number,
    title: string,
    ownerId: number,
};

const CourseHeaderSummary = ({ title, ownerId, id }: Props): React.Node => {
    const user = useSelector(state => state.user.id);

    const dispatch = useDispatch();
    const history = useHistory();

    const onDelete = React.useCallback(() => {
        dispatch(CourseActions.deleteCourse(id, history));
    }, [dispatch, history, id]);

    return (
        <Card className={'courseHeader'} bg={'light'}>
            <div className={'courseSummary'}>
                <h1>{title}</h1>
                <div className={'courseOrigin'}>
                    <h5 className={'courseTeacher'}>Course Teacher</h5>
                    <h5>Course University</h5>
                </div>
            </div>
            <div className={'courseActions'}>
                <Button variant={isEnrolled ? 'outline-primary' : 'primary'} size={'sm'}>
                    {isEnrolled ? 'Open Course' : 'Enroll'}
                </Button>
                {user === ownerId ? (
                    <NavLink
                        className={'btn btn-warning btn-sm button'}
                        to={AppRoutes.COURSE.EDIT(id)}
                    >
                        Edit
                    </NavLink>
                ) : null}
                {user === ownerId ? (
                    <Button className={'button'} variant={'danger'} size={'sm'} onClick={onDelete}>
                        Delete
                    </Button>
                ) : null}
            </div>
        </Card>
    );
};

export default CourseHeaderSummary;
