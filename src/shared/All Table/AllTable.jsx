import React from 'react';
import { Link } from 'react-router-dom';

const AllTable = ({toy,index}) => {
    const{price,Name,category,SellerName,quantity,_id} = toy || {}
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Seller-Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Avaiable quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>{index+1}</th>
              <td>{SellerName}</td>
              <td>{Name}</td>
              <td>{category}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td><Link to={`/singletoy/${_id}`}><button className="btn btn-primary">View Details</button></Link></td> 
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default AllTable;