'use client'

import { useInfiniteQuery } from 'react-query';
import { Virtuoso } from 'react-virtuoso';
import Footer from './(components)/footer';
import FeedItem from './(components)/feed-item';
import { Feed } from '../../types/feed';

const getFeed = ({ pageParam = 0 }) => {
    const requestUrl = new URL('http://localhost:3000/feed');
    requestUrl.searchParams.append('_start', String(pageParam));
    requestUrl.searchParams.append('_limit', '10');
    return fetch(requestUrl).then(r => r.json());
}

export default () => {
    const { data, status, fetchNextPage } = useInfiniteQuery<Response, unknown, Feed>('feed', getFeed, {
        getNextPageParam: (_, pages) => pages.length * 10
    });
    if (status === 'success') {
        return (
            <Virtuoso
                endReached={() => fetchNextPage()}
                useWindowScroll
                components={{ Footer }}
                data={data.pages.flat()}
                itemContent={(_, data) => (
                    <FeedItem {...data} />
                )} />
        )
    }
    return null;
};
