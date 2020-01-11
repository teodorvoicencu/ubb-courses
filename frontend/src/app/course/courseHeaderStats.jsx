// @flow
import * as React from 'react';
import Person from 'react-ionicons/lib/MdPerson';
import Albums from 'react-ionicons/lib/MdAlbums';
import { Card } from 'react-bootstrap';

import './styles/courseHeaderStats.scss';

const CourseHeaderStats = (): React.Node => {
    return (
        <Card className={'courseExtra'} bg={'light'}>
            <div className={'courseExtraItem'}>
                <Person className={'icon'} />
                <h5>5 students</h5>
            </div>
            <div className={'courseExtraItem'}>
                <Albums className={'icon'} />
                <h5>10 slides</h5>
            </div>
            <div className={'courseExtraItem'}>
                <Albums className={'icon'} />
                <h5>something else</h5>
            </div>
        </Card>
    );
};

export default CourseHeaderStats;
