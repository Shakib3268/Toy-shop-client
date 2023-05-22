import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Toy = ({item}) => {
  const {user}= useContext(AuthContext)
    const{_id,Name,price,quantity,ratings,picture} = item || {}
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} className='h-[500px]' /></figure>
  <div className="card-body m-0">
    <h2 className="card-title">
      {Name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className="m-0 p-0"><span className="font-bold text-xl">Price: </span>{price}</p>
    <p><span className="font-bold text-xl">Quantity: </span>{quantity}</p>
    <p><span className="font-bold text-xl">ratings: </span>{ratings}</p>
    <div className="card-actions justify-center">
      <div>
      { user ? <Link to={`/singletoy/${_id}`}><button className="btn text-green-500">View details</button></Link> :
      <Link to='login'><button className="btn text-green-500">View details</button></Link>
      }
      </div>
    </div>
  </div>
</div>
    )
};

export default Toy;
