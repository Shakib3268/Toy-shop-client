import React from 'react';

const Gallery = () => {
    return (
        <div className="container mx-auto mb-6">
            <h1 className="text-center font-bold text-3xl underline mb-4 mt-4">Our Top <span className='text-yellow-400'>Toys</span></h1>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img className='h-[500px] w-full' src="https://i.ibb.co/Wf8n6kR/thor-loki-bruce-banner-marvel-cinematic-universe-marvel-comics-png-favpng-Lv-PLNG7-QZAsn92-TTGBh-Xhu.jpg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img className='h-[500px] w-full' src="https://i.ibb.co/cNwqHC3/iron-man-s-armor-edwin-jarvis-pepper-potts-bruce-banner-png-favpng-Gi3x5p5s-Yi-Nq-VAf1-EQQu-WJG0-Q.jpg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img className='h-[500px] w-full' src="https://i.ibb.co/GJCMQtq/guardians-of-the-galaxy-2-groot-listens-facebook-cover.jpg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img className='h-[500px] w-full' src="https://i.ibb.co/Kwk9hrv/33339-Spider-Man-Homecoming-4-K-poster.jpg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Gallery;