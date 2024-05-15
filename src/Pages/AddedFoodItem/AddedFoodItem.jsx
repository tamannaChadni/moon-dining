import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";

import AddedItemRow from "./AddedItemRow";
// import { useLoaderData } from 'react-router-dom';

const AddedFoodItem = () => {
  // const foods = useLoaderData()
  const { user } = useContext(AuthContext);
  const [addedFood, setAddedFood] = useState();

  // const url =`http://localhost:5000/foods/${user?.email}`;

  useEffect(() => {
    fetch(`https://moon-dining-server.vercel.app/users/${user?.email}/foods`)
      .then((res) => res.json())
      // .then(data=>console.log(data))
      .then((data) => setAddedFood(data));
  }, [user]);
  // console.log(addedFood);

  return (
    <div className="containter mx-auto">
      <Helmet>
        <title>Moon Dining | Added Food items</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-red-500">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {addedFood?.map((food) => (
              <AddedItemRow key={food._id} food={food}></AddedItemRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddedFoodItem;
