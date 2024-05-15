import React from "react";

import { MdOutlineDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const OrderRow = ({ food, handleDelete }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, quantity, price, name, date,email } = food;

  return (
    <tr>
      <td>
        <span className="badge badge-ghost p-4 text-white bg-red-600">
          {name}
        </span>
      </td>

      <td className=" text-red-700 font-extrabold">{quantity}</td>

      <td className=" text-red-700 font-extrabold">{price}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>{email}</td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn  btn-error btn-xs"
        >
          <MdOutlineDelete />
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
