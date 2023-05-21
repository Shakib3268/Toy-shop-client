import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const SingleToy = useLoaderData()
    const{price} = SingleToy || {}
    return (
        <div>
            <h1>{price}</h1>
        </div>
    );
};

export default SingleToy;