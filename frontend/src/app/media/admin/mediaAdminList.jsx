// @flow
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Button, ListGroup } from 'react-bootstrap';
import ArrowUp from 'react-ionicons/lib/IosArrowDropup';
import ArrowDown from 'react-ionicons/lib/IosArrowDropdown';

import type { MediaItem } from '../types';
import type { Course } from '../../course/types';
import './style/mediaAdminList.scss';
import { CourseActions } from '../../redux/course';

import LightButton from './lightButton';

type Props = {
    course: ?Course,
};

const getKey = (mediaItem: MediaItem) => `mediaItem-${mediaItem.id}-ord-${mediaItem.index}`;

const MediaAdminList = ({ course }: Props) => {
    const initialList = (course && course.media) || [];
    const [items, setItems] = React.useState([...initialList]);
    const dispatch = useDispatch();

    const moveUp = index => {
        const up = index - 1;
        const swap = items[up];
        items[up] = items[index];
        items[index] = swap;

        setItems([...items]);
    };

    const moveDown = index => {
        const down = index + 1;
        const swap = items[down];
        items[down] = items[index];
        items[index] = swap;

        setItems([...items]);
    };

    const submitOrder = React.useCallback(() => {
        items.forEach((item, index) => {
            dispatch(CourseActions.reorderLesson(course.id, item.id, index));
        });
    }, [dispatch, items, course.id]);

    return (
        <>
            <ListGroup variant={'flush'} className={'list'}>
                {items.map((item: MediaItem, index) => (
                    <ListGroup.Item className={'list-item'} key={getKey(item)}>
                        <span className={'list-title'}>{item.title}</span>
                        <div>
                            {index > 0 && (
                                <LightButton
                                    onClick={() => {
                                        moveUp(index);
                                    }}
                                >
                                    <ArrowUp />
                                </LightButton>
                            )}
                            {index !== items.length - 1 && (
                                <LightButton
                                    onClick={() => {
                                        moveDown(index);
                                    }}
                                >
                                    <ArrowDown />
                                </LightButton>
                            )}
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div className={'buttons'}>
                <Button variant={'success'} className={'button'} onClick={submitOrder}>
                    Submit Order
                </Button>
                <Button variant={'primary'} className={'button'}>
                    Add
                </Button>
            </div>
        </>
    );
};

export default MediaAdminList;
