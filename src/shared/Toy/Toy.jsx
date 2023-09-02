import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import Rating from "react-rating";

const Toy = ({value}) => {
  const {user}= useContext(AuthContext)
    // const{_id,Name,price,quantity,ratings,picture} = item || {}
    const navigate =  useNavigate();
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    const { _id,Name,price,ratings,picture} = value;
    const handleDetails = _id => {
       if(!user)
       {
        Swal.fire({
            title: 'You have to log in first to view details!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('login');
            }
          })
       }
       else{
        navigate(`/singletoy/${_id}`);
       }
    }
    return(
      <div data-aos="fade-up"
      data-aos-duration="2000" className="card w-72  mx-auto bg-base-100 shadow-2xl">
          <figure className="mx-auto">
              <img src={picture} alt="Toys" className="w-28 h-36" />
          </figure>
          <div className="divider mb-0"></div>
          <div className="card-body p-0">
              <div className="p-3">
                  <h2 className="card-title text-black">{Name}</h2>

                  <div className="flex items-center justify-between">
                      <p className="font-semibold text-left text-black">Price: ${price}</p>
                       
                  </div>
              </div>
                <div className="mx-auto">
                <button onClick={()=> {handleDetails(_id)}} className="btn border-white bg-[#e51f6e] hover:bg-[#a0164d] mb-2">View Details</button>
                </div>
          </div>
      </div>
    )
};

export default Toy;
