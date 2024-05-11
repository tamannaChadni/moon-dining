import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddedFoodItem = () => {
    return (
        <div className='containter mx-auto'>
            <Helmet>
      <title>Moon Dining | Added Food items</title>
    </Helmet>
            
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-red-500'>
      <tr>
        
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
    </tbody>
    
    
  </table>
</div>

            </div>
    );
};

export default AddedFoodItem;