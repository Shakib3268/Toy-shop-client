import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleToy = () => {
    const SingleToy = useLoaderData()
    const{price,Name,picture,SellerName,email,ratings,quantity,description} = SingleToy || {}

    const notify = (event) =>{
        toast("Added My toy");
        event.target.disabled = true
    }
    return (
        <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl mt-3 text-center mb-3">
  <figure><img className='h-[500px]' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Toy Name : {Name}</h2>
    <p><span className='font-bold'>Seller-Name :</span> {SellerName}</p>
    <p><span className='font-bold'>Seller-Email :</span> {email}</p>
    <p><span className='font-bold'>Price :</span> ${price}</p>
    <p><span className='font-bold'>Ratings :</span> {ratings}</p>
    <p><span className='font-bold'>Available Quantity :</span> {quantity}</p>
    <p><span className='font-bold'>Description :</span> {description}</p>
    <div className="card-actions justify-end">
      <button onClick={notify} className="btn btn-primary">ADD To Favourite</button>
      <ToastContainer />
    </div>
  </div>
</div>
    );
};

export default SingleToy;