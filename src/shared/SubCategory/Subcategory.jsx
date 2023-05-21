import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toy from '../Toy/Toy';

const Subcategory = () => {
    const toys = useLoaderData()
    const [filtData,setFiltData]=useState([])
   const [category,setCategory]= useState("Spider toy")
   useEffect(() =>{
    const filtered = toys.filter(item => item.category === category)
    setFiltData(filtered)
   },[toys,category])
    return (
        <div className='mb-5'>
            <h1 className='text-3xl font-bold text-green-500 underline text-center mb-3'>Shop By Category</h1>
            <div className='text-center'>
            <Tabs>
    <TabList>
      <Tab onClick={() => setCategory('Spider toy')}>Spider Toys</Tab>
      <Tab onClick={() => setCategory('Iron toy')}>Iron toys</Tab>
      <Tab onClick={() => setCategory('Hulk toy')}>Hulk toys</Tab>
    </TabList>

    <TabPanel>
      <div className='grid grid-cols-3 gap-3'>
        {
            filtData.map(item => <Toy key={item._id} item={item}></Toy>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3 gap-3'>
        {
            filtData.map(item => <Toy key={item._id} item={item}></Toy>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3 gap-3'>
        {
            filtData.map(item => <Toy key={item._id} item={item}></Toy>)
        }
      </div>
    </TabPanel>
  </Tabs>
            </div>
        </div>
    );
};

export default Subcategory;