// @flow

import type { MediaItem } from '../media';

export type Person = {
    id: number,
    name: string,
    email: string,
};

export type Course = {
    id: number,
    name: string,
    description: string,
    owner: Person,
    students: Person[],
    lessons: MediaItem[],
};
