import React, {useState, useEffect} from 'react';
import { remoteResource } from '../../types/remote';
import { getCount } from '../../helpers/requests';

export const ViewCount = (props: { id: string }) => {

    const [views, setViews] = useState<number>(0);
    const [state, setState] = useState<remoteResource>('loading');

    useEffect(() => {
        getCount<{count: number}>(props.id).then(
            (record) => {
                setViews(record.count);
                setState('loaded');
            }
        ).catch(
            (err) => {
                setState('error');
            } 
        );
    }, []);

    return (
        <span>
        {state === 'error'
        ? 'failed to fetch'
        : state === 'loaded'
        ? `${views} ${views === 1 ? 'view' : 'views'}`
        : 'loading'}
        </span>
    );

}