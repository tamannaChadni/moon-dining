import React from "react";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const AddedItemRow = ({ food }) => {
  // eslint-disable-next-line react/prop-types
  const {_id, image, price, name } = food;

  return (
    // <div className="container mx-auto">
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="food" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
          
          
          <span className="badge badge-ghost p-4 text-white bg-red-600">{name}</span>
        </td>
        <td className=" text-red-700 font-extrabold">{price}</td>
        <th>
          <Link to={`/update-food/${_id}`}><button className="btn  btn-error btn-xs"><GrUpdate />
</button></Link>
        </th>
      </tr>
    // </div>
  );
};

export default AddedItemRow;
