import React, {  useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import SingleFood from "../../component/SingleFood/SingleFood";
import { useLoaderData } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../../Providers/AuthProvider";
import "./loader.css";


const AllFood = () => {
  const foods = useLoaderData();


  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading loading-dots loading-lg search-loader"></span>
    );
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  // const [search, setSearch] = useState("");

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const text = e.target.search.value
  //   setSearch(text);
  //   // setSearch(search);
  // };
// console.log(search);

const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
};


const handleSearch = async () => {
  try {
    const response = await axios.get('https://moon-dining-server.vercel.app/foods/search', {
      params: { query: searchQuery },
    });
    setFoodItems(response.data);
  } catch (error) {
    console.error('Error fetching food items:', error);
  }
};

// useEffect(()=>{
//   // eslint-disable-next-line no-unused-vars
//   const getData = async() =>{
//     // eslint-disable-next-line no-unused-vars
//     const {data} = await axios(
//       `http://localhost:5000/foods/search?search=${search}`
//     )
//     getData()
//   }
// },[search])
  // useEffect(() => {
  //   fetch(`http://localhost:5000/foods/search?search=${search}`)
  //     .then((res) => res.json())
  //     // .then(data=>console.log(data))
  //     .then((data) => setSearch(data));
  // }, []);


  // console.log(search);
  return (
    <div>
      <Helmet>
        <title>Moon Dining | All Foods Item</title>
      </Helmet>
      <div className="container mx-auto">
        {/* img+text */}
        <div
          className="hero rounded object-cover"
          style={{ backgroundImage: "url(https://i.ibb.co/pRxCPtG/food1.jpg)" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-red-500">
                Moon Dining
              </h1>
              <p className="mb-5">Home | All Foods Items</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSearch}>
        <div className="mt-4 text-center">
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Food name"
              type="text"
              name="search"
              value={searchQuery}
        onChange={handleSearchChange}
             
              
            />
            <button className="btn join-item rounded-r-full bg-red-600 text-white">
              Search
            </button>
            <ul>
        {foodItems.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
          </div>
        </div>
        </form>

        {/* img+text */}
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-red-700">
                Display All Foods Items
              </h2>
              <p className="font-serif text-xl dark:text-gray-600">
                Our Chef are world class
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {foods.map((food) => (
                <SingleFood key={food._id} food={food}></SingleFood>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllFood;
