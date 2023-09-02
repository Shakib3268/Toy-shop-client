import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toy from '../Toy/Toy';

const Subcategory = () => {
  const [subcategoryValue, setsubcategoryValue] = useState([]);


  useEffect(() => {
    fetch(`https://toy-shop-server-ten.vercel.app/alltoy`)
      .then(res => res.json())
      .then(data => setsubcategoryValue(data))
  }, [])
    return (
      <div className="mx-auto my-40 text-center">
      <h2 className="text-4xl font-bold text-center mb-5 text-[#3f55d3]">Category: Discover Endless Fun</h2>

      <p className="max-w-xl  mx-auto mb-10 text-justify px-2">Quench your thirst for playtime exploration with our oasis of toy categories. Journey through the vast desert of possibilities and uncover hidden treasures.</p>
    
          <div className="text-center  text-[#e44343]">
            <Tabs>
              <TabList>
                <Tab>Spider Toys</Tab>
                <Tab>IronMan Toys</Tab>
                <Tab>Hulk Toys</Tab>
              </TabList>

              <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 mx-1'>
                  {
                    (subcategoryValue.filter(toy => toy.category === "Spider toy")).map(value => <Toy key={value._id}
                      value={value}></Toy>)
                  }
                </div>
              </TabPanel>
              <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3'>
                  {
                    (subcategoryValue.filter(toy => toy.category === "Iron toy")).map(value => <Toy key={value._id}
                      value={value}></Toy>)
                  }
                </div>
              </TabPanel>
              <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3'>
                  {
                    (subcategoryValue.filter(toy => toy.category === "Hulk toy")).map(value => <Toy key={value._id}
                      value={value}></Toy>)
                  }
                </div>
              </TabPanel>
            </Tabs>
          </div> 

    </div>
    );
};

export default Subcategory;