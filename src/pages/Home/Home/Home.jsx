import React from 'react';
import Banner from '../../../shared/Banner/Banner';
import FreeShipping from '../../../shared/Free shiping/FreeShipping';
import Gallery from '../../../shared/Gallery/Gallery';
import Store from '../../../shared/StoreSection/Store';
import Subcategory from '../../../shared/SubCategory/Subcategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Subcategory></Subcategory>
            <FreeShipping></FreeShipping>
            <Store></Store>
        </div>
    );
};

export default Home;