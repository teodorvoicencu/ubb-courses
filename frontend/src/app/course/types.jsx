// @flow

export type Owner = {
    id: number,
    name: string,
};

export type Slide = {};

export type Course = {
    id: number,
    name: string,
    description: string,
    owner: Owner,
    slides: Slide[],
};
