"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

    gsap.registerPlugin(useGSAP);
    const tl = gsap.timeline();

    useGSAP(() => {
        tl.from("#text_1", {
            fontSize: "150px",
            top: "40%",
            duration: 1,
            delay: 1,
            position: "relative"
        })
        tl.from("#main", {
            background: "white",
        })
        tl.from("#img", {
            y: "200%",
            duration: .2,
        })
        tl.from("#text_2", {
            y: "100vw",
            duration: .5,
        })
        tl.from("#btns", {
            y: "100vw",
            stagger: 0.5,
            duration: .2,
        })
        tl.from("#star", {
            y: "200vw",
            rotate: 40,
            stagger: 0.1,
            duration: .2,
        })
        gsap.from("#header", {
            y: -100,
            delay: 3.3,
            duration: .1,
        })
    }, []);

    return (
        <div id='main' className='bg-cover bg-center bg-[url(/bg.jpg))] flex justify-between flex-col h-[100dvh] font-[Big_Shoulders_Display]'>
            <div id='header'>
                <Header />
            </div>
            <div id='main_2' className='flex justify-between h-[75%] flex-col'>
                <h1 id='text_1' className='font-[Tiro_Devanagari_Hindi] text-9xl text-center'>नमस्ते</h1>
                <div className='flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center'>
                    <img id='img' className='w-[600px]' src="/chess.png" alt="" />
                </div>
                <h1 id='text_2' className='font-[Silkscreen] text-6xl w-full text-center'>Frontend Developer</h1>
            </div>
            <div id='btns' className='flex p-3 sm:gap-5 gap-2'>
                <a className='px-5 py-3 relative hover:border-white transition-all border-2 border-[#CC94C5] cursor-pointer bg-[#6C1854] rounded-full text-white text-4xl font-bold' href="mailto:sumit8t6t@gmail.com" >Hire Me
                    <img id='star' className='absolute w-[35px] top-[0%] right-[0%] -translate-x-1/2 -translate-y-1/2' src="star.svg" alt="" />
                </a>
                <a className='px-5 py-3 hover:border-white transition-all border-2 border-[#CC94C5] cursor-pointer bg-[#6C1854] rounded-full text-white text-4xl font-bold' target='#' href='https://drive.google.com/file/d/1C7cCN36ZyMZV5GO4c4MDTOR7c8B-YQ8C/view?usp=sharing' >View Resume</a>
            </div>
            <div className='stars'>
                <img id='star' className='absolute sm:w-[63px] w-[40px] top-[35%] left-[16%] -translate-x-1/2 -translate-y-1/2' src="star.svg" alt="" />
                <img id='star' className='absolute sm:w-[63px] w-[50px] top-[15%] left-[56%] -translate-x-1/2 -translate-y-1/2' src="star.svg" alt="" />
                <img id='star' className='absolute sm:block hidden sm:w-[45px] w-[35px] bottom-[8%] left-[63%] -translate-x-1/2 -translate-y-1/2' src="star.svg" alt="" />
                <img id='star' className='absolute sm:w-[45px] w-[35px] top-[55%] left-[45%] -translate-x-1/2 -translate-y-1/2' src="star.svg" alt="" />
                <img id='star' className='absolute sm:w-[45px] w-[35px] bottom-[27%] left-[80%] -translate-x-1/2 -translate-y-1/2' src="star.svg" alt="" />
            </div>
        </div>
    )
}

export default Hero;