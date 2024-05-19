import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import {AuthContext} from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'



const AddFood = () => {
  const { user } = useContext(AuthContext);



  const handleAddFood = (event) => {
    
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const price = form.price.value;
    const country = form.country.value;
    const description = form.description.value;
    const email = user.email;

    const newFood = {
      name,
      image,
      quantity,
      category,
      price,
      country,
      description,
      email,
      // food_count: 0,
    };

    // console.log(newFood);

    // send data to the server

    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'A food item add Successfully',
                icon: 'success',
                confirmButtonText: 'done'
              })
        }
      });
  };








    return (
        <div>
            <Helmet>
      <title>Moon Dining | Add Food items</title>
    </Helmet>
    <div className='container mx-auto'>

<div className="p-24">
    <h2 className="text-3xl font-bold text-center text-red-600">Add a item of food</h2>
    
      <form onSubmit={handleAddFood}>
      {/* form 1st row */}
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text text-red-400">Food Name</span>
          </div>
          <input
            name="name"
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
            name="image"
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
            name="quantity"
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
            name="category"
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
            name="price"
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
            name="country"
            type="text"
            placeholder="Country"
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
            name="description"
            type="text"
            placeholder="A short description of the food item"
            className="input input-bordered w-full"
          />
        </label>
        {/* <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text text-red-400">Food Count</span>
          </div>
          <input
            name="food_count"
            type="text"
            placeholder="Food Count"
            className="input input-bordered w-full"
          />
        </label> */}
        
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