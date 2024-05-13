import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
  const food = useLoaderData();
  const {_id,name,image,category,price,email,origin,description} = food;
    return (

      
      <div className="container mx-auto mt-4">

<Helmet>
      <title>Moon Dining | Food  Details</title>
    </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            src={image}
          />
        </figure>
        <div className="card-body">
          <Link to={_id}></Link>
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <p className=" font-extralight"> {category}</p>
          
          <p className=" font-light">{ price}</p>
          
          <p className="font-semibold">Added by : {email}</p>
          
          
          <p className="font-semibold">
            <span className="text-red-500">{origin}</span>
          </p>
          <p className="font-semibold">
            <span className="text-red-500">{description}</span>
          </p>
          <Link to="/purchase-food"><button className='bg-red-700 text-white btn-sm btn'>Pruchase
          </button></Link>
        </div>
      </div>

    </div>
    );
};

export default FoodDetails;