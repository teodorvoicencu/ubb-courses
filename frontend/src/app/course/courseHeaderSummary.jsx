// @flow
import { Button, Card } from 'react-bootstrap';
import * as React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './styles/courseHeaderSummary.scss';

import { CourseActions } from '../redux/course';
import { AppRoutes } from '../types';

import type { Person } from './types';

type Props = {
    id: number,
    name: string,
    ownerId: number,
    students: Person[],
};

const CourseHeaderSummary = ({ name, ownerId, id, students }: Props): React.Node => {
    const user = useSelector(state => state.user.id);
    const [enrolled, setEnrolled] = React.useState(false);

    React.useEffect(() => {
        setEnrolled(students.filter((student: Person) => student.id === user).length > 0);
    }, [students, user]);

    const dispatch = useDispatch();
    const history = useHistory();

    const onDelete = React.useCallback(() => {
        dispatch(CourseActions.deleteCourse(id, history));
    }, [dispatch, history, id]);

    const onEnroll = React.useCallback(() => {
        dispatch(CourseActions.enrollCourse(id));
        setEnrolled(true);
    }, [dispatch, id]);

    return (
        <Card className={'courseHeader'} bg={'light'}>
            <div className={'courseSummary'}>
                <h1>{name}</h1>
                <div className={'courseOrigin'}>
                    <h5 className={'courseTeacher'}>Course Teacher</h5>
                    <h5>Course University</h5>
                </div>
            </div>
            <div className={'courseActions'}>
                {user !== ownerId ? (
                    <Button
                        variant={enrolled ? 'success' : 'outline-primary'}
                        size={'sm'}
                        onClick={enrolled ? null : onEnroll}
                    >
                        {enrolled ? 'Open Course' : 'Enroll'}
                    </Button>
                ) : null}
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
