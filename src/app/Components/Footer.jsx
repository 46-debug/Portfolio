import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {

    gsap.registerPlugin(ScrollTrigger, useGSAP);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#main_5",
                start: "top 95%",
                end: "top 45%",
                scrub: 2,
            },
        });

        tl.from("#heading", {
            y: "-100%",
            duration: .5,
        })
        tl.from("#links",{
            y:"-100%",
            duration:1,
            stagger:.7
        })
    }, []);

    return (
        <div id='main_5' className='bg-[#2A2A2A]'>
            <div className='bg-white overflow-hidden rounded-t-3xl relative flex flex-col items-center justify-center px-5 py-5 gap-10 font-[Big_Shoulders_Display]'>
                <h1 id='heading' className=' text-center mt-10 sm:text-8xl text-6xl font-bold'>I LOOK FORWARD TO
                    <span> SERVING</span> YOU !
                </h1>
                <div className='flex flex-wrap p-5 gap-5 justify-center'>
                    <a id='links' className='text-xl hover:text-[#6C1854] text-zinc-800 border-r pr-5 flex items-center justify-center gap-2' href="mailto:sumit8t6t@gmail.com"><img src="email icon.svg" alt="" />sumit8t6t@gmail.com</a>
                    <a id='links' className='text-xl hover:text-[#6C1854] text-zinc-800 border-r pr-5 flex items-center justify-center gap-2' href="tel:+916203618372"><img src="phone icon.svg" alt="" />6203618372</a>
                    <a id='links' className='text-xl hover:text-[#6C1854] text-zinc-800 border-r pr-5 flex items-center justify-center gap-2' href='https://github.com/46-debug' target='#'><img src="github.svg" alt="" />github.com/46-debug</a>
                    <a id='links' className='text-xl hover:text-[#6C1854] text-zinc-800 flex items-center justify-center gap-2' href='https://www.linkedin.com/in/sumit-singh123/' target='#'><img src="linkedin icon.svg" alt="" />linkedin.com/sumit-singh123</a>
                    <a id='links' className='text-xl absolute bottom-5 right-5 z-10 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.58)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1.00)] transition-all px-5 py-2 bg-green-600 rounded-full text-white font-semibold flex items-center bg-gradient-to-l from-green-600 via-emerald-400 to-green-600 justify-center gap-2'
                        href="https://wa.me/+918986486488" target='#'>
                        <img src="whatsapp icon.svg" alt="" />Start Chat
                    </a>
                </div>
                <div className='h-[180px]'></div>
                <img className='absolute bottom-0 left-[40%] -translate-x-[50%]' src="plant.svg" alt="" />
            </div>
        </div>
    )
};

export default Footer;