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
   const [category,setCategory]= useState("learning toys")
   useEffect(() =>{
    const filtered = toys.filter(item => item.category === category)
    setFiltData(filtered)
   },[toys,category])
    return (
        <div className='mb-5'>
            <h1 className='text-3xl font-bold text-green-500 underline text-center mb-3'>SUb-Category toy</h1>
            <div className='text-center'>
            <Tabs>
    <TabList>
      <Tab onClick={() => setCategory('Math toy')}>Math toy</Tab>
      <Tab onClick={() => setCategory('play toy')}>Play toy</Tab>
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
  </Tabs>
            </div>
        </div>
    );
};

export default Subcategory;