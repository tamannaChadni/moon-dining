import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const PurchaseFood = () => {
  const { user } = useContext(AuthContext);

  const foods = useLoaderData();
  const { name, quantity, price, email } = foods;

  const purchaseFood = (event) => {
    event.preventDefault();

    const form = event.target;
    // console.log(form);

    const name = form.name.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const formattedDate = date.toISOString();
    const email = user.email;

    // console.log(date);

    const purchase = {
      name,
      quantity,
      price,
      date: formattedDate,
      email,
    };

    fetch("https://moon-dining-server.vercel.app/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "A food order Successfully placed",
            icon: "success",
            confirmButtonText: "done",
          });
        }
      });
  };

  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Helmet>
        <title>Moon Dining | Purchase Food items</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="p-24">
          <h2 className="text-3xl font-bold text-center text-red-600">
            Purchase a item of food
          </h2>

          <form onSubmit={purchaseFood}>
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
                  defaultValue={name}
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text text-red-400">Price</span>
                </div>
                <input
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  defaultValue={price}
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
                  defaultValue={quantity}
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text text-red-400">Buyer Name</span>
                </div>
                <input
                  name="userName"
                  type="text"
                  placeholder="name"
                  className="input input-bordered w-full"
                  readOnly
                  defaultValue={user?.name || ''}
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
                  name="email"
                  type="text"
                  placeholder="Buyer Email"
                  className="input input-bordered w-full"
                  readOnly
                  defaultValue={email}
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text text-red-400">Buying Date</span>
                </div>
                {/* <input
                name="date"
                type="date"
                placeholder="Buying Date"
                className="input input-bordered w-full"
                
              /> */}
                <div className="input input-bordered w-full " >
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </div>
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
