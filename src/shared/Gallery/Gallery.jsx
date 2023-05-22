import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow,Pagination,Navigation } from 'swiper';

const Gallery = () => {
    return (
        <div className="container">
            <h1 className="text-center font-bold text-3xl">Our Top <span className='text-yellow-400'>Toys</span></h1>
        </div>
    );
};

export default Gallery;