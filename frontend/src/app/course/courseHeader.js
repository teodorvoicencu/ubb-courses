import * as React from 'react';
import './styles/courseHeader.scss';
import { Button, Card } from 'react-bootstrap';
import Person from 'react-ionicons/lib/MdPerson.js';
import Albums from 'react-ionicons/lib/MdAlbums.js';

const isEnrolled = true;

const CourseHeader = (): React.Node => {
    return (
        <div className={'row'}>
            <Card className={'courseHeader'} bg={'light'}>
                <div className={'courseSummary'}>
                    <h1>Course Title</h1>
                    <div className={'courseOrigin'}>
                        <h5 className={'courseTeacher'}>Course Teacher</h5>
                        <h5>Course University</h5>
                    </div>
                </div>
                <Button className={'enrollButton'} variant={'primary'} size={'lg'} block>
                    {isEnrolled ? 'Open Course' : 'Enroll'}
                </Button>
            </Card>
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
        </div>
    );
};

export default CourseHeader;
