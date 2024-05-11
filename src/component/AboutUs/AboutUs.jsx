import React from 'react';
import about from '../../../public/img/about.jpg';

const AboutUs = () => {
    return (
        <div className='container mx-auto mt-4'>
        
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row  gap-10">
    <img src={about} className="max-w-sm rounded-lg shadow-2xl animate__animated animate__zoomIn" />
    <div>
      <h1 className="text-2xl font-bold font-serif">Moon Dining</h1>
      <p className="py-6">At Moonrise Bistro, the menu is a fusion of Earth-inspired cuisine and innovative space dining. Each dish is carefully crafted using locally sourced ingredients, including hydroponically grown produce and lab-cultivated proteins. From savory lunar seafood to decadent lunar desserts, every bite is an explosion of flavor that transports you to the far reaches of the galaxy.</p>
      <button className="btn bg-red-500 text-white rounded-lg  btn-sm">Read more</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;