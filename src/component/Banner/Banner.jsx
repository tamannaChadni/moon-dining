import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero rounded-lg object-cover min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/5RyJBG1/cover.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold animate__animated animate__fadeInDown">Good Place Good Food</h1>
      <p className="mb-5 animate__animated animate__pulse">Always Fresh and Delightful and immerse yourself in a culinary adventure that celebrates the essence of fine dining at our restaurant and Discover a world of gastronomic delights at our restaurant, where every meal is a masterpiece.</p>
      <Link to="/all-foods"><button className="btn bg-red-500 btn-error text-white btn-sm">All Foods</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;