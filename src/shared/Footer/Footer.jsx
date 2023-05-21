import React from 'react';
import { FaBeer, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-black'>
          <footer className="footer p-10 text-white">
  <div>
    <img className="h-[60px] w-[80px]" src="https://i.ibb.co/C6WSNRj/superhero-movie-3d-text-style-effect-1389-749.jpg" alt="" />
    <p>Avengers Industries Ltd.<br/>Providing reliable tech since 1992</p>
    <div className='flex gap-2 text-2xl'>
        <FaFacebook></FaFacebook>
        <FaInstagram></FaInstagram>
        <FaLinkedin></FaLinkedin>
    </div>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
<p className='text-center text-gray-400'><small>Copyright @ 2023-All right reserved by Averngers Industrial Limited</small></p>
        </div>
    );
};

export default Footer;