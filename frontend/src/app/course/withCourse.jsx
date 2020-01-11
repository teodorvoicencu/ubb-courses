// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CourseActions, CourseTypes } from '../redux/course';
import SuspenseFallback from '../suspense/suspenseFallback';

import type { Course } from './types';

type CourseProps = {
    course: Course,
    loading: boolean,
};

type Props = {
    fetchCourse: CourseTypes.FETCH_COURSE,
    match: any,
};

const withCourse = <T: *>(
    component: React.AbstractComponent<*>,
): React.AbstractComponent<$Diff<T, CourseProps>> => {
    class CourseConnector extends React.Component<Props> {
        componentDidMount(): void {
            const { id } = this.props.match.params;
            this.props.fetchCourse(id);
        }

        render() {
            const { loading, course } = this.props;
            if (!loading && course) {
                return React.createElement(component, { course });
            }
            return <SuspenseFallback />;
        }
    }

    const mapStateToProps = state => {
        return {
            course: state.course.data,
            loading: state.course.loading,
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            fetchCourse: id => dispatch(CourseActions.fetchCourse(id)),
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(withRouter(CourseConnector));
};

export default withCourse;
