import React, { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddGalleryInfo = () => {
  const { user } = useContext(AuthContext);


  

  const handleGallery = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const feedback = form.feedback.value;
    const email = user.email;

    const galleryFood = {
     
      image,
      feedback,
      email,
    };

   

    // send data to the server

    fetch("http://localhost:5000/gallery", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(galleryFood),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "A feedback add Successfully",
            icon: "success",
            confirmButtonText: "done",
          });
        }
      });
  };

  return (
    <div className="container mx-auto">
      <div className="p-24">
        <h2 className="text-3xl font-bold text-center text-red-600">
          Add image for gallery section with some info
        </h2>

        <form onSubmit={handleGallery}>
          {/* form 1st row */}
          <div  className="md:flex gap-3 mb-8 ">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text text-red-400">User info</span>
              </div>
              <input
                name="email"
                type="text"
                placeholder="email"
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
                <span className="label-text text-red-400">Feedback</span>
              </div>

              <input
                name="feedback"
                type="text"
                placeholder="Feedback"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-block  bg-red-600 text-white"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddGalleryInfo;
