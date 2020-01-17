// @flow
import * as React from 'react';

export type RouteProps = {
    component: React.ComponentType,
    path: string,
    exact: boolean,
    name: string,
};

export const RouteTypes = Object.freeze({
    PUBLIC: 'PUBLIC',
    PRIVATE: {
        TEACHER: 'PRIVATE_TEACHER',
        STUDENT: 'PRIVATE_STUDENT',
    },
});
