// @flow
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

import placeholder from '../theme/static/holder.png';

import type { Course } from './types';
import './styles/courseCard.scss';

type Props = {
    course: Course,
};

const CourseCard = ({ course }: Props) => {
    const university = course.university || 'Babeș-Bolyai University';

    return (
        <div className={'container'}>
            <img className={'image'} src={placeholder} alt={'Placeholder'} />
            <Card.Body className={'body'}>
                <Card.Title className={'title'}>{course.name}</Card.Title>
                <Card.Subtitle className={'subtitle'}>{university}</Card.Subtitle>
                <Card.Text>{course.description}</Card.Text>
                <NavLink className={'btn btn-primary'} to={`/courses/${course.id}`}>
                    View
                </NavLink>
            </Card.Body>
        </div>
    );
};

export default CourseCard;
