import React,{ useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleFood from '../SingleFood/SingleFood';
import { AuthContext } from "../../Providers/AuthProvider";

const TopFoods = () => {
    const foods = useLoaderData();

    const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading loading-dots loading-lg search-loader"></span>
    );
  }
    return (
        <div className="container mx-auto mt-4 ">
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-red-500">
                Top Foods in Our Resturant
              </h2>
              <p className="font-serif text-xl dark:text-gray-600">
                Our Special Dishes
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {foods.slice(1, 4).map((food) => (
                <SingleFood
                  key={food._id}
                  food={food}
                ></SingleFood>
              ))}
            </div>
            <div className='mx-auto text-center'>
            <Link to="/all-foods"><button className='btn btn-sm bg-red-700 text-white '>See All Foods</button></Link>
            </div>
          </div>
        </section>
      </div>
    );
};

export default TopFoods;