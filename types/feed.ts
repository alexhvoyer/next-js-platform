export type FeedItem = {
    id: number;
    title?: string;
    text: string;
    image?: string;
    rating: number;
    commentsCount: number;
};

export type Feed = FeedItem[];