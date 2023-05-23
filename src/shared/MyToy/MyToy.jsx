import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
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
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       
        fetch(`http://localhost:5000/mytoy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
           Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
          const remaining = toys.filter((toys) => toys._id !== id);
          setToys(remaining);
        }
      });
      }
    })
    
  };
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
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, index) => (
            <ToyRow
              key={toy._id}
              toy={toy}
              handleDelete={handleDelete}
            ></ToyRow>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default MyToy;
