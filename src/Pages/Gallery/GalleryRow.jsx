import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const GalleryRow = ({ food }) => {
  // eslint-disable-next-line react/prop-types
  const { image, email,feedback } = food;

  const [isHovered, setIsHovered] = useState(false);

  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card w-96 bg-base-100 shadow-xl"
      >
        <figure className="px-10 pt-10">
          <img src={image} alt="food" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          {isHovered && (
            <div>
              <h2 className="card-title">{email}</h2>
              <p>{feedback}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryRow;
