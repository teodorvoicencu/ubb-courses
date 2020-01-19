// @flow
import * as React from 'react';

import './styles/courseHtmlSlide.scss';

type Props = {
    html: string,
};

const CourseHtmlSlide = ({ html }: Props): React.Node => {
    return <div className="courseHtmlSlide" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default CourseHtmlSlide;
