import React from "react";
import { Link } from "react-router-dom";

const ToyRow = ({toy,handleDelete}) => {
  const {_id, Name, SellerName, picture, price, email, quantity, category } =
    toy || {};

    
  return (
    <tr>
      <th>
      <label>
            <input type="checkbox" className="checkbox" />
          </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{Name}</div>
            <div className="text-sm opacity-50">Seller Name : {SellerName}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/updatetoy/${_id}`}><button  className="btn mr-2 text-pink-400">Edit</button></Link>
        <button onClick={() => handleDelete(_id)} className="btn text-purple-500">Delete</button>
      </th>
    </tr>
  );
};

export default ToyRow;
