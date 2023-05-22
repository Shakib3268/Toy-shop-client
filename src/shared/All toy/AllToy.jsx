import React, { useState } from "react";
import { useEffect } from "react";
import { Link} from "react-router-dom";
import AllTable from "../All Table/AllTable";

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
            toy.map((toy,index) => <AllTable toy={toy} index={index} key={toy._id}></AllTable>)
        }
    </div>
  )
};

export default AllToy;
