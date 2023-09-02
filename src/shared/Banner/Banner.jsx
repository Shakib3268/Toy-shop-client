import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
    return (
      <div data-aos="zoom-in-up" className="hero min-h-screen mb-3 " style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/horizontal-shot-charming-sibling-girls-playing-together-peetee-tent-with-wooden-eco-toys-toddler-baby-her-elder-sister-spending-time-together-home_176532-20876.jpg?size=626&ext=jpg&ga=GA1.1.1614607020.1683036746&semt=ais")` }}>
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className=" text-neutral-content">
        <div className="grid lg:grid-cols-2 gap-6 p-36">
          <img src="https://img.freepik.com/premium-photo/horizontal-shot-charming-sibling-girls-playing-together-peetee-tent-with-wooden-eco-toys-toddler-baby-her-elder-sister-spending-time-together-home_176532-20876.jpg?size=626&ext=jpg&ga=GA1.1.1614607020.1683036746&semt=ais" alt="" />
          <div className="max-w-2xl">
            <h1 className="mb-5 p-4 text-2xl bg-[#163fb1] border-l-8 border-[#641fe5] text-white font-semibold">Avengers Toys Galore!</h1>

            <p className="mb-5 border-l-8  border-[#641fe5] text-xl bg-stone-600/70 p-4">Explore our vast selection of avengers toys and bring home endless fun. From cute and cuddly to interactive and educational, our toys will spark imagination and create cherished memories. Shop now and let the adventures begin!</p>
            <button className="btn ml-7 border-white bg-[#2d2077] hover:bg-[#1ebb2b]">Shop now</button>
            <button className="btn ml-7 border-white  bg-transparent  hover:bg-[#1ebb2b]">Explore</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;