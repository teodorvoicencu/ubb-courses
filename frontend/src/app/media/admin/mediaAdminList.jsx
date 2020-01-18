// @flow
import * as React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import ArrowUp from 'react-ionicons/lib/IosArrowDropup';
import ArrowDown from 'react-ionicons/lib/IosArrowDropdown';

import type { MediaItem } from '../types';
import type { Course } from '../../course/types';

import './style/mediaAdminList.scss';

type Props = {
    course: ?Course,
};

// const MoveUpButton = () => (
//     <Button variant={'light'}>
//         <ArrowUp />
//     </Button>
// );
// const MoveDownButton = () => (
//     <Button variant={'light'}>
//         <ArrowDown />
//     </Button>
// );

const getKey = (mediaItem: MediaItem) => `mediaItem-${mediaItem.id}-ord-${mediaItem.index}`;

const move = (initialItems: MediaItem[], index: number, step: number): MediaItem[] => {
    const [currentItem] = initialItems.filter(it => it.index === index);

    /* The element whose place we swap with our current. */
    const targetIndex = (index + step) % initialItems.length;
    const [targetItem] = initialItems.filter(it => it.index === targetIndex);

    /* The list without the swapped items. */
    const partialList = initialItems.filter(it => ![index, targetIndex].includes(it.index));

    const swap = targetItem.index;
    targetItem.index = currentItem.index;
    currentItem.index = swap;

    const updatedItems = [...partialList, currentItem, targetItem];
    updatedItems.sort((a: MediaItem, b: MediaItem) => a.index - b.index);

    return [...updatedItems];
};

const MediaAdminList = ({ course }: Props) => {
    const initialList = (course && course.media) || [];
    const [items, setItems] = React.useState([...initialList]);

    const moveUp = id => {
        console.log(`move up ${id}.`);
        setItems(move(items, id, -1));
    };

    const moveDown = id => {
        // setItems(move(items, id, 1));
    };

    return (
        <div className={'list-container'}>
            <ListGroup variant={'flush'}>
                {items.map((item: MediaItem) => (
                    <ListGroup.Item className={'list-item'} key={getKey(item)}>
                        <span className={'list-title'}>
                            {item.index} {item.title}
                        </span>
                        <div>
                            {item.index > 0 && (
                                <Button
                                    variant={'light'}
                                    onClick={() => {
                                        moveUp(item.id);
                                    }}
                                >
                                    <ArrowUp />
                                </Button>
                            )}
                            {item.index !== items.length - 1 && (
                                <Button variant={'light'} onClick={moveDown(item.id)}>
                                    <ArrowDown />
                                </Button>
                            )}
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default MediaAdminList;
