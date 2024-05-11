import React from 'react';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
    return (
        <div className='container mx-auto'>
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
        </div>
    );
};

export default Gallery;