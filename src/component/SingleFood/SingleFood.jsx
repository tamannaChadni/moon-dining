import React from 'react';
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Helmet } from 'react-helmet-async';

// eslint-disable-next-line react/prop-types
const SingleFood = ({food}) => {

    // eslint-disable-next-line react/prop-types
    const {food_image,food_name,food_category,price,} = food;

    return (


        <div className="card  bg-base-100 shadow-xl image-full">

<Helmet>
      <title>Moon Dining | Single Food Item</title>
    </Helmet>
  <figure><img src={food_image} alt="food" /></figure>
  
  
  <div className="card-body">
  <div className='flex justify-between items-center'>
    <button className=' btn-sm bg-red-600 text-white rounded'>Offer</button>
   <span className='text-red-500 bg-white rounded'><CiHeart /></span> 
  </div>
    <h2 className="card-title">{food_name}</h2>
    <p><span className='font-bold'>Category :</span> {food_category}</p>
    <p><span className='font-bold'>Price :</span> {price}</p>
    
    <div className="card-actions justify-end">
    <div className='flex  justify-evenly   gap-32 items-center'>
      
      <div className='flex'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      </div>
      <button className="btn bg-red-600 text-white btn-sm">Details</button>
    </div>
    </div>
  </div>
</div>
    );
};

export default SingleFood;