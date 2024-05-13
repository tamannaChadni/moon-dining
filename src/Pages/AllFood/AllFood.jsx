import React from "react";
import { Helmet } from "react-helmet-async";
import SingleFood from "../../component/SingleFood/SingleFood";
import { useLoaderData } from "react-router-dom";

const AllFood = () => {
    const foods = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Moon Dining | All Foods items</title>
      </Helmet>
      <div className="container mx-auto">
        {/* img+text */}
        <div
          className="hero rounded object-cover"
          style={{ backgroundImage: "url(https://i.ibb.co/pRxCPtG/food1.jpg)" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-red-500">
                Moon Dining
              </h1>
              <p className="mb-5">Home | All Foods Items</p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
        <div className="join">
  <input className="input input-bordered join-item" placeholder="Food"/>
  <button className="btn join-item rounded-r-full bg-red-600 text-white">Search</button>
</div>  
        </div>
        
        {/* img+text */}
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-red-700">Display All Foods Items</h2>
            <p className="font-serif text-xl dark:text-gray-600">
              Our Chef are world class
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {foods.map((food) => (
              <SingleFood key={food._id} food={food}></SingleFood>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AllFood;
