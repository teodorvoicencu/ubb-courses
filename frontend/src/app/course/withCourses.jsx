// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { CoursesActions, CoursesTypes } from '../redux/courses';
import SuspenseFallback from '../suspense/suspenseFallback';

import type { Course } from './types';

type CoursesProps = {
    courses: Course[],
    loading: boolean,
};

type Props = {
    fetchCourses: CoursesTypes.FETCH_COURSES,
};

const withCourses = <T: *>(
    component: React.AbstractComponent<*>,
): React.AbstractComponent<$Diff<T, CoursesProps>> => {
    class CoursesConnector extends React.Component<Props> {
        componentDidMount(): void {
            this.props.fetchCourses();
        }

        render() {
            const { loading, courses } = this.props;
            if (!loading && courses) {
                return React.createElement(component, { courses });
            }
            return <SuspenseFallback />;
        }
    }

    const mapStateToProps = state => {
        return {
            courses: state.courses.data,
            loading: state.courses.loading,
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            fetchCourses: () => dispatch(CoursesActions.fetchCourses()),
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(CoursesConnector);
};

export default withCourses;
