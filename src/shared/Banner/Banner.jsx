import React from 'react';
import img from '../../assets/img.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full img-fluid rounded-lg" />
          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className='space-y-7 ml-[300px] text-center mb-[150px]'>
                <p className='text-3xl font-bold text-black mr-[100px]'>Big fun for Kids</p>
                <h2 className='text-7xl text-pink-600 font-bold'>A world <br /> to Explore</h2>
                <p className='text-3xl text-white'>Active toys for smart kids.Bring fun and Non-stop <br /> learning for your litte ones</p>
                <button className='btn bg-yellow-500 rounded-lg text-2xl'>Read More</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img} className="w-full img-fluid" />
          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className='space-y-7 ml-[300px] text-center mb-[150px]'>
                <p className='text-3xl font-bold text-black mr-[100px]'>Your WOW! Store</p>
                <h2 className='text-7xl text-pink-500 font-bold'>The Ultimate <br /> toy store</h2>
                <p className='text-3xl  text-white'>Active toys for smart kids.Bring fun and Non-stop <br /> learning for your litte ones</p>
                <button className='btn bg-yellow-500 text-2xl'>Read More</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img2} className="w-full img-fluid" />
          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className='space-y-7 ml-[300px] text-center mb-[150px]'>
                <p className='text-3xl font-bold text-black mr-[100px]'>Big fun for Kids</p>
                <h2 className='text-7xl text-pink-600 font-bold'>A world <br /> to Explore</h2>
                <p className='text-3xl text-white'>Active toys for smart kids.Bring fun and Non-stop <br /> learning for your litte ones</p>
                <button className='btn bg-yellow-500 rounded-lg text-2xl'>Read More</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img3} className="w-full img-fluid" />
          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className='space-y-7 ml-[300px] text-center mb-[150px]'>
                <p className='text-3xl font-bold text-black mr-[100px]'>Big fun for Kids</p>
                <h2 className='text-7xl text-pink-600 font-bold'>ExtraOrdinary <br /> Learning Toys</h2>
                <p className='text-3xl text-white'>Active toys for smart kids.Bring fun and Non-stop <br /> learning for your litte ones</p>
                <button className='btn bg-yellow-500 rounded-lg text-2xl'>Read More</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;