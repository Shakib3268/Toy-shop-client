import React, { useState } from "react";
import { useEffect } from "react";
import Toy from "../Toy/Toy";

const AllToy = () => {
  const [toy, setToy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoy")
      .then((res) => res.json())
      .then((result) => {
        setToy(result);
      });
  }, []);

  return (
    <div>
        {
            toy.map((toy,index) => <div className="overflow-x-auto">
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
                  <td>{toy.SellerName}</td>
                  <td>{toy.Name}</td>
                  <td>{toy.category}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td><button onClick={() => handleView()} className="btn btn-primary">View Details</button></td>
                  
                </tr>
              </tbody>
            </table>
          </div>)
        }
    </div>
  )
};

export default AllToy;
