import React from 'react';

const Banner = () => {
    return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/HrQX9qX/2-20845-hulk-avengers-age-of-ultron-png-transparent-png.png")`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">"Avengers Assemble: Earth's Mightiest Heroes Unite!"</h1>
          <p className="mb-5">Welcome to the ultimate destination for Avengers fans and collectors! Our Avengers toy website is your one-stop-shop for all things Marvel, featuring an incredible assortment of action figures, playsets, and merchandise that will transport you into the thrilling world of Earth's mightiest heroes.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;