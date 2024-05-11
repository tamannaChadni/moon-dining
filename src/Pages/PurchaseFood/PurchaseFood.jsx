import React from 'react';
import { Helmet } from 'react-helmet-async';

const PurchaseFood = () => {
    return (
        <div >
            <Helmet>
      <title>Moon Dining | Purchase Food items</title>
    </Helmet>
    <div className='container mx-auto'>

    <div className="p-24">
        <h2 className="text-3xl font-bold text-center text-red-600">Purchase a item of food</h2>
        
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
                <span className="label-text text-red-400">Price</span>
              </div>
              <input
                name="tourists_spot_name"
                type="text"
                placeholder="Price"
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
                <span className="label-text text-red-400">Buyer Name</span>
              </div>
              <input
                name="location"
                type="text"
                placeholder="Buyer Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form 3rd row */}
          <div className="md:flex gap-3 mb-8">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text text-red-400">Buyer Email</span>
              </div>
              <input
                name="seasonality"
                type="text"
                placeholder="Buyer Email"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text text-red-400">Buying Date</span>
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
          
         
          <input
            type="submit"
            className="btn btn-block  bg-red-600 text-white"
            value="Purchase "
          />
        </form>
      </div>
    </div>
            
        </div>
    );
};

export default PurchaseFood;