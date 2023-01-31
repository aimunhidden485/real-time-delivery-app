import Image from 'next/image';
import React from 'react';
import momos from '../images/diego-lozano-mE6kjov4rTg-unsplash.jpg'
const Banner = () => {
    return (
        <div className='z-10 bg-white justify-between md:flex-row flex-col py-10'>
           
           <div className='max-w-7xl mx-auto relative flex w-full items-center justify-between md:flex-row flex-col gap-8'>
           <Image className='min-w-250 rounded' width={600} src={momos}></Image>
            <div>
                <span>Where tradition meets tase</span>
                <h1 className='lg:text-[60px] font-bold leading-none mb-2'>Taste the tradition with every bite! </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, minus!</p>
            </div>
            
           </div>
        </div>
    );
};

export default Banner;