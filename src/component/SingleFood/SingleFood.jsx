import React from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleFood = ({ food }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, image, name, category, price } = food;

  return (
    <div className="card  bg-base-100 shadow-xl image-full">
      <Helmet>
        <title>Moon Dining | Home </title>
      </Helmet>
      <figure>
        <img src={image} alt="food" className=" object-fill" />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <button className=" btn-sm bg-red-600 text-white rounded">
            Offer
          </button>
          <span className="text-red-500 bg-white rounded">
            <CiHeart />
          </span>
        </div>
        <div>
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="font-bold">Category :</span> {category}
          </p>
          <p>
            <span className="font-bold">Price :</span> {price}
          </p>
        </div>

        <div className="card-actions justify-end">
          <div className="flex  justify-evenly   gap-32 items-center">
            <div className="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <Link to={`/foods/${_id}`}>
              {" "}
              <button className="btn bg-red-600 text-white btn-sm">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
