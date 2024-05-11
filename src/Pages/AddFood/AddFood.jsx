import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddFood = () => {
    return (
        <div>
            <Helmet>
      <title>Moon Dining | Add Food items</title>
    </Helmet>
    <div className='container mx-auto'>

<div className="p-24">
    <h2 className="text-3xl font-bold text-center text-red-600">Add a item of food</h2>
    
      <form>
      {/* form 1st row */}
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text text-red-400">Food Name</span>
          </div>
          <input
            name="image"
            type="text"
            placeholder="Food Name"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text text-red-400">Food image</span>
          </div>
          <input
            name="tourists_spot_name"
            type="text"
            placeholder="Food Image"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      {/* form 2nd row */}
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text text-red-400">Quantity</span>
          </div>
          
          <input
            name="country_name"
            type="text"
            placeholder="Quantity"
            className="input input-bordered w-full"
          />
          
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text text-red-400">Food Category</span>
          </div>
          <input
            name="location"
            type="text"
            placeholder="Food Category"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      {/* form 3rd row */}
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text text-red-400">Price</span>
          </div>
          <input
            name="seasonality"
            type="text"
            placeholder="Price"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text text-red-400">Food Origin</span>
          </div>
          <input
            name="average_cost"
            type="text"
            placeholder="Buying Date"
            className="input input-bordered w-full"
          />
        </label>
      </div>

      {/* form 4rd row */}
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text text-red-400">A short description of the food item</span>
          </div>
          <input
            name="seasonality"
            type="text"
            placeholder="A short description of the food item"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text text-red-400">Add By</span>
          </div>
          <input
            name="average_cost"
            type="text"
            placeholder="Add by"
            className="input input-bordered w-full"
          />
        </label>
      </div>
     
      <input
        type="submit"
        className="btn btn-block  bg-red-600 text-white"
        value="Add a food item "
      />
    </form>
  </div>
</div> 
        </div>
    );
};

export default AddFood;