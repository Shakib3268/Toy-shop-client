import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToyRow from "./ToyRow";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoy?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log(data);
      });
  }, [user]);
  const handleDelete = id =>{
    fetch(`http://localhost:5000/mytoy/${id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount>0){
            const remaining = toys.filter(toys => toys._id !== id)
            setToys(remaining)
        }
    })
}
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Toy Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Category</th>
            <th>Available Quantity</th>
          </tr>
        </thead>
        <tbody>
            {
                toys.map((toy,index) => <ToyRow key={toy._id} toy={toy} handleDelete={handleDelete}></ToyRow>)
            }
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default MyToy;
