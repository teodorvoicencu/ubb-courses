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

/**
 * Enumeration of possible media types.
 */
export const MediaType = Object.freeze({
    TEXT: 'text',
    IMAGE: 'image',
    VIDEO: 'video',
    DOWNLOADABLE: 'downloadable',
});

export type MediaItem = {
    id: number,
    /**
     * Stores the position in the list of items for a given course.
     * This allows re-ordering items on the go.
     */
    index: number,
    title: string,
    content: string,
    url: string,
    type: $Values<typeof MediaType>,
};
