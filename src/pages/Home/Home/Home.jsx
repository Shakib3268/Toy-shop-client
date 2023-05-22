import React from 'react';
import Banner from '../../../shared/Banner/Banner';
import Gallery from '../../../shared/Gallery/Gallery';
import Store from '../../../shared/StoreSection/Store';
import Subcategory from '../../../shared/SubCategory/Subcategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Subcategory></Subcategory>
            <Store></Store>
        </div>
    );
};

export default Home;