"use client"
import React, { useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Pro = () => {

    gsap.registerPlugin(useGSAP);
    let tl;

    useGSAP(() => {
        gsap.set("#box", { x: 0 });
    }, []);


    const [current, setCurrent] = useState(0);

    const projects = [
        {
            title: "MetaCanvas",
            describtion: "MataCanvas is a modern web application for buying and selling digital images. It features user authentication, an intuitive UI, and tools for users to upload, describe, price, and manage their images. The platform also allows free downloads, liking, saving, and searching for images.",
            img: "screen1.png",
            liveLink: "https://metacanvas-seven.vercel.app/",
            codeLink: "https://github.com/46-debug/digital-art-marketplace",
        },
        {
            title: "Round robin coupon distribution system",
            describtion: "Coupon Distribution System is a web-app built with Next.js to manage promotional coupons efficiently. It includes an Admin Panel where you can create, update, delete, enable, or disable coupons while tracking user's IP addresses and session IDs. Users can claim available coupons.",
            img: "screen2.png",
            liveLink: "https://coupon-management.vercel.app/",
            codeLink: "https://github.com/46-debug/coupon-management",
        },
        {
            title: "Email Template Maker",
            describtion: "Email Template Maker is a web application built with Next.js and Tailwind CSS that enables users to visually design responsive, customizable email templates using a drag-and-drop editor, real-time preview, and export options for easy reuse.",
            img: "screen3.png",
            liveLink: "https://email-template-maker-w5ag-lgd7lbd5f-46-debugs-projects.vercel.app/",
            codeLink: "https://github.com/46-debug/email-template-maker",
        },
        {
            title: "Dynamic Dashboard",
            describtion: "The Dynamic Dashboard is a simple Next.js and Tailwind‑CSS‑based web app featuring authentication-protected routes (Login, Dashboard, Profile, Settings), along with a posts feed that includes search and pagination, storing a mock JWT token in local storage",
            img: "screen4.png",
            liveLink: "https://vercel.com/46-debugs-projects/dynamic-dashboard",
            codeLink: "https://github.com/46-debug/dynamic-dashboard",
        },
        {
            title: "Smart To-do",
            describtion: "A modern and interactive Todo app built using React and Redux. This app allows you to create, read, and delete tasks with a beautiful UI. Also integrates a weather API to show the current temperature for outdoor-related tasks. Includes a simple login feature to secure access to the task list.",
            img: "screen5.png",
            liveLink: "https://46-debug.github.io/smart-todo/",
            codeLink: "https://github.com/46-debug/smart-todo",
        }
    ]

    const next = () => {
        gsap.timeline()
            .to("#box", {
                x: "-100vw",
                duration: 0.3,
            })
            .set("#box", {
                x: "100vw",
            })
            .to("#box", {
                x: "0vw",
                duration: 0.3,
            });
        setCurrent(current + 1)
    }

    const previous = () => {
        gsap.timeline()
            .to("#box", {
                x: "100vw",
                duration: 0.3,
            })
            .set("#box", {
                x: "-100vw",
            })
            .to("#box", {
                x: "0vw",
                duration: 0.3,
            });
        setCurrent(current - 1)
    }


    return (
        <div id='projects' className='bg-[#353535] py-5 justify-center gap-10 font-[Big_Shoulders_Display] min-h-screen flex flex-col items-center relative overflow-hidden'>
            <h1 id="text" className="absolute sm:top-5 top-2 text-[50px] [text-shadow:_0px_0px_20px_rgb(255_255_255_/_1.00)] text-[#ffffff] font-[Pixelify_Sans]">Projects</h1>
            <div id='box' className='flex overflow-hidden items-center flex-col gap-5'>
                <div className='flex sm:mt-0 mt-15 sm:w-auto w-[90%] items-centet sm:flex-row-reverse sm:rounded-2xl rounded-3xl bg-white sm:p-5 p-2 gap-5 border-3 border-gray-500 justify-center flex-col'>
                    <img className='sm:w-[30vw] border-2 border-gray-300 object-cover sm:rounded-xl rounded-[16px] h-auto' src={projects[current]?.img} alt="img" />
                    <div className='flex sm:w-[45vw] max-w-[450px] relative gap-5 justify-center flex-col'>
                        <h1 className='text-zinc-800 font-semibold text-2xl'>{projects[current]?.title}</h1>
                        <p className='text-zinc-800/90 font-normal text-2xl'>
                            {projects[current]?.describtion}
                        </p>
                        <div className='flex my-3 items-center justify-center gap-5'>
                            <a className='px-3 py-2.5 transition-all hover:bg-red-800 cursor-pointer bg-red-500 text-white rounded-full text-2xl' target="#" href={projects[current]?.liveLink}>Go Live</a>
                            <a className='px-3 py-2.5 transition-all hover:bg-zinc-800 hover:text-white cursor-pointer text-black border rounded-full text-2xl' target='#' href={projects[current]?.codeLink}>View Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-around items-center'>
                <button disabled={current === 0} onClick={previous} className={`bg-[#6C1854] hover:bg-[#44253b] p-1.5 border border-white transition-all cursor-pointer hover:shadow-[3px_3px_0px_0px_rgba(186,186,186,1.00)] shadow-[6px_6px_0px_0px_rgba(186,186,186,1.00)] ${current === 0 ? "opacity-0" : ""}`}><img src="aero.svg" alt="" /></button>
                <h3 className='text-center rounded-full text-white border px-4 text-2xl'>{current + 1}/{projects.length}</h3>
                <button disabled={current === projects.length - 1} onClick={next} className={`bg-[#6C1854] hover:bg-[#44253b] p-1.5 border border-white transition-all cursor-pointer hover:shadow-[3px_3px_0px_0px_rgba(186,186,186,1.00)] shadow-[6px_6px_0px_0px_rgba(186,186,186,1.00)] ${current === projects.length - 1 ? "opacity-0" : ""}`}><img className='rotate-180' src="aero.svg" alt="" /></button>
            </div>
        </div>
    )
}

export default Pro;