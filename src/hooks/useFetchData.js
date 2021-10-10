import { useState, useEffect } from 'react';
import { getData } from '../helpers/getData';

export const useFetchData = ( filter ) => {

    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getData()
            .then( characters => {
                setState({
                    data: characters,
                    loading: false
                });
            })
    }, [ filter ]);

    return state;
}
