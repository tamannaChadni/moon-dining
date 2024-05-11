import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

import { AuthContext } from "../../Providers/AuthProvider";

const MyList = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };

  const loadedSpot = useLoaderData();
  // console.log(loadedSpot);
  // const [users, setUsers] = useState(loadedUsers);


  const { user } = useContext(AuthContext);
  const [spot, setSpot] = useState(loadedSpot);
  // console.log(user);
  useEffect(() => {
    fetch(`https://moon-adventure-ltd-server.vercel.app/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSpot(data);
      });
  }, [user]);

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
        fetch(`https://moon-adventure-ltd-server.vercel.app/spots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your TouristSpot has been deleted.",
                "success"
              );
              // eslint-disable-next-line react/prop-types
              const remainingSpot = spot.filter((s) => s._id !== _id);
              console.log(remainingSpot);
              setSpot(remainingSpot);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Moon Adventure | My List</title>
      </Helmet>

      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">
              Display My Listed Tourist Spot
            </h2>
            <p className="font-serif text-xl dark:text-gray-600">
              There are all those places which i like most
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Photo</th>
                  <th>Country</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {spot?.map((spot) => (
                  <tr key={spot._id}>
                    <th>{incrementCount}</th>
                    <td>{spot.image}</td>
                    <td>{spot.country_name}</td>

                    <td>
                      <Link to={`/update-spots/${spot._id}`}>
                        <button className="btn btn-sm bg-sky-800 text-white">
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(spot._id)}
                        className="btn bg-red-900 btn-sm text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyList;
