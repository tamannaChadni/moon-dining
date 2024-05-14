import React from 'react';

import { MdOutlineDelete } from "react-icons/md";


// eslint-disable-next-line react/prop-types
const OrderRow = ({food,handleDelete}) => {



   
    // eslint-disable-next-line react/prop-types
    const {_id, image, price, name } = food;
  
    return (
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
          
          <button onClick={() => handleDelete(_id)}
           className="btn  btn-error btn-xs"><MdOutlineDelete />
</button>
        </th>
      </tr>
    );
};

export default OrderRow;