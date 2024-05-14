import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import OrderRow from "./OrderRow";


const OrderFood = () => {

  const purchase = useLoaderData();
  // console.log(purchase);

  const [orderFood, setOrderFood] = useState(purchase);






  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/purchase/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your order has been deleted.",
                "success"
              );
              // eslint-disable-next-line react/prop-types
              const remainingOrder = orderFood.filter((s) => s._id !== _id);
              // console.log(remainingOrder);
              setOrderFood(remainingOrder);
            }
          });
      }
    });
  };


  return (
    <div className="containter mx-auto">
      <Helmet>
        <title>Moon Dining | Ordered Food items</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-red-500">
            <tr>
              <th>Name</th>
              <th>Quality</th>
              <th>Price</th>
              <th>Time</th>
              <th>Owner</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orderFood?.map((food) => (
              <OrderRow key={food._id} food={food}
              handleDelete={handleDelete}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderFood;
