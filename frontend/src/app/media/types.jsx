// @flow

/**
 * Enumeration of possible media types.
 */
export const MediaType = Object.freeze({
    TEXT: 'TEXT',
    IMAGE: 'IMAGE',
    VIDEO: 'VIDEO',
    DOWNLOADABLE: 'DOWNLOADABLE',
});

export type MediaItem = {
    id: number,

    /**
     * Stores the position in the list of items for a given course.
     * This allows re-ordering items on the go.
     */
    orderIndex: number,

    title: string,

    content: string,

    url: string,

    type: $Values<typeof MediaType>,
};
