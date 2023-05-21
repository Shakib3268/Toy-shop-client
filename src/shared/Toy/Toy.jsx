import React from "react";

const Toy = ({item}) => {
    const{Name,SellerName,price,quantity,ratings,category,description,picture} = item || {}
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {Name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p><span className="font-bold text-xl">Description : </span>{description}</p>
    <p><span className="font-bold text-xl">Seller Name : </span>{SellerName}</p>
    <p><span className="font-bold text-xl">Price: </span>{price}</p>
    <p><span className="font-bold text-xl">Quantity: </span>{quantity}</p>
    <p><span className="font-bold text-xl">ratings: </span>{ratings}</p>
    <div className="card-actions justify-center">
      <div className="badge badge-outline text-purple-600 btn">View Details</div>
    </div>
  </div>
</div>
    )
};

export default Toy;
