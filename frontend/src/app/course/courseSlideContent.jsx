// @flow
import * as React from 'react';

import CourseHtmlSlide from './courseHtmlSlide';
import './styles/courseSlideContent.scss';
import type { MediaItem } from './types';
import { MediaType } from './types';
import CourseVideoSlide from './courseVideoSlide';

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
