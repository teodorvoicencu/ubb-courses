// @flow

export type Person = {
    id: number,
    name: string,
    email: string,
};

export type Slide = {};

export type Course = {
    id: number,
    name: string,
    description: string,
    owner: Person,
    students: Person[],
    slides: Slide[],
};
