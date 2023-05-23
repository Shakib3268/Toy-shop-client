import React, { useState } from "react";
import { useEffect } from "react";
import AllTable from "../All Table/AllTable";

const AllToy = () => {
  const [toy, setToy] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/alltoy?limit=20`)
      .then((res) => res.json())
      .then((result) => {
        setToy(result);
      });
  }, []);

  const handleSearch = () =>{
    fetch(`http://localhost:5000/toysearch/${searchText}`)
    .then(res => res.json())
    .then(data => {
      setToy(data)
    })
  }
  return (
    <div>
      <div className="text-center mt-3 mb-3">
        <input onChange={(e) => setSearchText(e.target.value)} type="text" className="border-gray-400 border-2 p-2 rounded-md focus:outline-none focus:border-blue-400"/>
        <button onClick={handleSearch } className="btn">search</button>
      </div>
      <div>
        {
            toy.map((toy,index) => <AllTable toy={toy} index={index} key={toy._id}></AllTable>)
        }
    </div>
    </div>
  )
};

export default AllToy;
