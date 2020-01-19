// @flow
import * as React from 'react';

import './styles/courseSlideContent.scss';
import { MediaType } from '../media/types';
import type { MediaItem } from '../media';

import CourseVideoSlide from './courseVideoSlide';
import CourseHtmlSlide from './courseHtmlSlide';

type Props = {
    mediaItem: MediaItem,
};

const CourseSlideContent = ({ mediaItem }: Props): React.Node => {
    let slideContent;
    if (mediaItem.type === MediaType.TEXT)
        slideContent = <CourseHtmlSlide html={mediaItem.content} />;
    else if (mediaItem.type === MediaType.VIDEO)
        slideContent = (
            <CourseVideoSlide description={mediaItem.content} youtubeId={mediaItem.url} />
        );

    return <div className="courseSlideContent">{slideContent}</div>;
};

export default CourseSlideContent;
