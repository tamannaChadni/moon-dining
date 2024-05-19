import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SingleFood from "../../component/SingleFood/SingleFood";
import { useLoaderData } from "react-router-dom";

import { AuthContext } from "../../Providers/AuthProvider";
import "./loader.css";

const AllFood = () => {
  const initialFoods = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [foods, setFoods] = useState(initialFoods);

  const [foodCount, setFoodCount] = useState(0);
  const[foodsPerPage,setfoodsPerPage] =useState(3);

  const [currentPage,setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/foodCount")
      .then((res) => res.json())
      .then((data) => setFoodCount(data.count));
  }, []);
  

  useEffect(() => {
    fetch(`http://localhost:5000/foods?page=${currentPage}&size=${foodsPerPage}`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [currentPage,foodsPerPage]);



  const numberOfPages = Math.ceil(foodCount / foodsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handleFoodItemPerPage = e =>{
    const val = parseInt(e.target.value);
    setfoodsPerPage(val);
    setCurrentPage(0);

  }

  const handlePrevBtn = () =>{
    if (currentPage> 0) {
      setCurrentPage(currentPage-1);
    }
  }
  const handleNextBtn = () =>{
    if (currentPage < pages.length -1 ) {
      setCurrentPage(currentPage+1);
    }
  }
  

  if (loading) {
    return (
      <span className="loading loading-dots loading-lg search-loader"></span>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Moon Dining | All Foods Item</title>
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
        <form>
          <div className="mt-4 text-center">
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Food name"
                type="text"
                name="search"
              />
              <button className="btn join-item rounded-r-full bg-red-600 text-white">
                Search
              </button>
            </div>
          </div>
        </form>

        {/* img+text */}
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-red-700">
                Display All Foods Items
              </h2>
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
        <div className=" text-center  mt-2 mb-2">
        <button className="btn btn-sm bg-red-600 text-white" onClick={handlePrevBtn}>Previous</button>
          {/* {pages.map((page) => (
            <button
              className="btn btn-sm bg-red-600 text-white"  onClick={handleFoodItemPerPage} value={foodsPerPage}
              key={page}
            >
              {page}
            </button>
          ))} */}
          <button className="btn btn-sm bg-red-600 text-white" onClick={handleNextBtn}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default AllFood;
