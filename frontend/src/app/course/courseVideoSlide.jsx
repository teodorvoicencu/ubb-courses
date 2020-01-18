// @flow
import * as React from 'react';
import './styles/courseVideoSlide.scss';
import Text from 'react-ionicons/lib/MdText';
import Button from 'react-bootstrap/Button';
import { OverlayTrigger, Popover } from 'react-bootstrap';

type Props = {
    description: string,
    youtubeId: string,
};

const CourseVideoSlide = ({ description, youtubeId }: Props): React.Node => {
    const descriptionPopover = (
        <Popover id="descriptionPopover">
            {/* <Popover.Title></Popover.Title> */}
            <Popover.Content>{description}</Popover.Content>
        </Popover>
    );

    return (
        <div className="courseVideoSlide">
            <div className="videoWrapper">
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
            <OverlayTrigger trigger="click" placement="left" overlay={descriptionPopover}>
                <Button size="sm" variant="dark" className="descriptionButton">
                    <Text className="descriptionIcon" />
                </Button>
            </OverlayTrigger>
        </div>
    );
};

export default CourseVideoSlide;
