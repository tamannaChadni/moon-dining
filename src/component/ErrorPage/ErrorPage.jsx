import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../public/img/images.jpg"

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" container mx-auto mt-5">
      <img src={img} alt=""  className="mx-auto w-[50%] object-fill rounded-lg "/>
      </div>
            <div className="flex items-center w-full justify-center mt-4 gap-3  text-center">
              <button
                onClick={() => navigate(-1 || "/")}
                className="flex items-center justify-center w-1/2 px-5 py-1 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto   hover:bg-gray-100 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span className="text-red-500 font-extrabold text-xl">Go back</span>
              </button>

              <button onClick={() => navigate("/")} className="text-red-500 font-extrabold text-3xl btn-outline btn-error btn" >
                Go Back Home
              </button>
            </div>
          </div>
       
  );
};

export default ErrorPage;
