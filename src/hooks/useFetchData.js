import { useState, useEffect } from 'react';
import { getData } from '../helpers/getData';

export const useFetchData = () => {

    const [ state, setState ] = useState({
        data: []
    });

    useEffect(() => {
        getData()
            .then( data => {
                setState({ data });
            })
    }, []);

    return state;
}
