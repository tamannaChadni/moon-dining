import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
  const food = useLoaderData();
  const {food_name,food_image,food_category,price,made_by,food_origin,description} = food;
    return (
      <div className="container mx-auto mt-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            src={food_image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{food_name}</h2>
          <p className=" font-extralight"> {food_category}</p>
          
          <p className=" font-light">{ price}</p>
          
          <p className="font-semibold"> {made_by}</p>
          
          
          <p className="font-semibold">
            <span className="text-red-500">{food_origin}</span>
          </p>
          <p className="font-semibold">
            <span className="text-red-500">{description}</span>
          </p>
          <button className='bg-red-700 text-white btn-sm btn'>Pruchase</button>
        </div>
      </div>

    </div>
    );
};

export default FoodDetails;