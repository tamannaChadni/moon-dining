import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import GalleryRow from "./GalleryRow";

const Gallery = () => {
  const foods = useLoaderData();

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Moon Dining | Gallery</title>
      </Helmet>
      <div
        className="hero rounded object-cover"
        style={{ backgroundImage: "url(https://i.ibb.co/9wDwb2y/food2.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-red-500">
              Moon Dining
            </h1>
            <p className="mb-5">Home | Gallery</p>
          </div>
        </div>
      </div>

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
              {foods.map((food) => (
                <GalleryRow key={food._id} food={food}></GalleryRow>
              ))}
            </div>
            <div className="mx-auto text-center">
              <Link to="/gallery-info">
                <button className="btn btn-sm bg-red-700 text-white ">
                  Added new picture
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
