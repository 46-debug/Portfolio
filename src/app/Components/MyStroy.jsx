import React, { useState } from 'react'

const MyStroy = () => {

    return (
        <div className='font-[Big_Shoulders_Display] overflow-hidden py-10 sm:px-[10vw] px-0 gap-7 flex flex-col items-center justify-center relative min-h-screen bg-[#2A2A2A]'>
            <div className='flex z-10 gap-5'>
                <h1 className='px-4 py-1 border border-white text-white text-2xl bg-[#2A2A2A] font-semibold'>My Story</h1>
                <button className='px-4 py-1 border-[#FF96DF] border hover:bg-[#42243a] cursor-pointer bg-[#6C1854]'><img src="speaker.svg" alt="" /></button>
            </div>
            <p className='text-right text-white px-5 text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='flex relative z-[0] my-5 flex-wrap items-center justify-center'>
                <div className='flex p-2 px-3 pb-3 border border-black/10 sm:w-64 w-48 flex-col items-center justify-center rotate-[-10.67deg] bg-[radial-gradient(ellipse_40.89%_40.89%_at_50.00%_50.00%,_white_0%,_white_100%)] shadow-[10px_10px_20px_0px_rgba(0,0,0,0.20)]'>
                    <img src="pin black.svg" alt="" />
                    <img className='sm:h-72 h-56 object-cover' src="my image.jpg" alt="" />
                </div>
                <div className='flex p-2 px-3 pb-3 border border-black/10 sm:w-64 w-48 flex-col items-center justify-center rotate-[8.33deg] bg-[#EFEFEF] shadow-[10px_10px_20px_0px_rgba(0,0,0,0.20)]'>
                    <img src="pin black.svg" alt="" />
                    <img className='sm:h-72 h-56 object-cover' src="https://images.unsplash.com/photo-1496670013738-4f730477bfdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
            </div>
            <p className='text-start z-[1] text-white px-5 text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='w-full z-[2] px-5'>
                <button className='px-3 sm:mb-7 mb-[] hover:rounded-full cursor-pointer transition-all flex gap-3 text-white font-bold text-2xl py-2.5 bg-[#6C1854] shadow-[6px_6px_0px_0px_#BABABA] border'>View Resume <img src="eye icon.svg" alt="" /></button>
            </div>
        </div>
    )
}

export default MyStroy;