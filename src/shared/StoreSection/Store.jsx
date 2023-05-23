import React from 'react';

const Store = () => {
    return (
        <div>
            <h1 className='text-2xl mb-4 mt-3 font-bold underline text-center'>Our Store <span className='text-yellow-400'>Policy</span></h1>
        <div className='grid lg:grid-cols-2'>
            <div className='text-center bg-[#ec6f66] text-white p-10'>
                <h1 className='font-bold text-xl'>Our store</h1>
                <p>Pzza Martiri Olivetta, 16, 16034, Portofino, Italy</p>
                <hr className='w-12 ml-[270px] mt-3 mb-3' />
                <p className='font-bold'>Opening hours</p>
                <p><small>Monday to Friday: 9am - 6pm</small></p>
                <p><small>Saturday to Sunday: 10am - 4pm</small></p>
            </div>
            <div className='text-center bg-[#8DC26F]  text-white p-10'>
                <h1 className='font-bold text-xl'>SIGN UP FOR UPDATES</h1>
                <p><small>Sign up to get exclusive offers from our store</small></p>
                <input type="email" name="eemail" placeholder='YOUR EMAIL ADDRESS' id="" className='p-3 mt-4 text-black' />
                <br />
                <button className='btn bg-[#4c976b] mt-3'>Subscribe</button>
            </div>
        </div>
        </div>
    );
};

export default Store;