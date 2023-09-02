import React from 'react';
import Banner from '../../../shared/Banner/Banner';
import FreeShipping from '../../../shared/Free shiping/FreeShipping';
import Store from '../../../shared/StoreSection/Store';
import Subcategory from '../../../shared/SubCategory/Subcategory';
import Video from '../Video/Video';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Video></Video>
            <Subcategory></Subcategory>
            <FreeShipping></FreeShipping>
            <Store></Store>
        </div>
    );
};

export default Home;