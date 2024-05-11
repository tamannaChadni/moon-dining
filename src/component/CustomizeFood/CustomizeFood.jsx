import React from 'react';
import overlay from '../../../public/img/overlay-top.png'
import one from '../../../public/img/1.jpg'
import two from '../../../public/img/2.jpg'
import three from '../../../public/img/3.jpg'
import four from '../../../public/img/4.jpg'
import five from '../../../public/img/5.jpg'
import six from '../../../public/img/6.jpg'
import { FaAngleDown } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import overlaydown from '../../../public/img/overlay-bottom.png'


const CustomizeFood = () => {
    return (
        <div className='container mx-auto mt-4 bg-red-500 rounded' >
            <div className=' rounded-lg'>
                <img src={overlay} alt="" className=' w-full' />
                {/* text content */}
                <div className='flex items-center justify-between gap-44 p-5'>
                <div>
                    <p className='text-xl font-semibold text-white'>BREAKFAST</p>
                    <p className='text-white'>Special customized your breakfast</p>
                </div>
                <div>
                <button className="btn btn-outline  btn-sm text-white bg-red-500">Coupon Code: FGR4568</button>
                </div>
                <div className=' flex  items-center bg-white text-red-500 rounded'>
                    <button className='px-3  text-red-500 font-thin'>Filter</button>
                    <FaAngleDown />
                </div>
                
                </div>
                {/* text content */}
                {/* image content */}
                <div className='flex items-center gap-4 p-4 '>
                    <div>
                        <img src={one} alt=""  className=' rounded'/>
                        <p className=' text-white font-thin'>FRESH CHIPS</p>
                        <div className=' mt-1 flex'>
                        <CiStar />
                        <CiStar />
                        <CiStar />

                        </div>
                    </div>
                    <div>
                        <img src={two} alt="" className=' rounded' />
                        <p className=' text-white font-thin'>FRANKY</p>
                        <div className=' mt-1 flex'>
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />

                        </div>
                    </div>
                    <div>
                        <img src={three} alt="" className=' rounded' />
                        <p className=' text-white font-thin'>CRISPY PIZZA</p>
                        <div className=' mt-1 flex'>
                        <CiStar />
                        <CiStar />
                        <CiStar />

                        </div>
                    </div>
                    <div>
                        <img src={four} alt=""  className=' rounded'/>
                        <p className=' text-white font-thin'>PASTA</p>
                        <div className=' mt-1 flex'>
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />

                        </div>
                    </div>
                    <div>
                        <img src={five} alt="" className=' rounded' />
                        <p className=' text-white font-thin'>PANNER</p>
                        <div className=' mt-1 flex'>
                        <CiStar />
                        <CiStar />
                        <CiStar />

                        </div>
                    </div>
                    <div>
                        <img src={six} alt="" className=' rounded' />
                        <p className=' text-white font-thin'>DHOSA</p>
                        <div className=' mt-1 flex'>
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />

                        </div>
                    </div>
                </div>
                {/* image content */}
                
            </div>
            <img src={overlaydown} alt="" className=' w-full' />
        </div>
    );
};

export default CustomizeFood;