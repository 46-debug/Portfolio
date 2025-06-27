import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MyStroy = () => {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio("/when i was.mp3"));
  }, []);

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main_3",
        start: "top bottom",
        end: "top 15%",
        scrub: 1,
        // markers:true
      },
    });
    tl.from("#start", {
      y: "-30vw",
      duration: 0.7,
    })
    tl.from("#bent1", {
      x: "-100%",
      duration: 0.7,
    })
    tl.from("#img1", {
      y: "30vw",
      x: "-100%",
      duration: 0.7,
    })
    tl.from("#img2", {
      y: "30vw",
      x: "100%",
      duration: 0.7,
    })
  }, []);

  const progressTween = useRef(null);

  useEffect(() => {
    if (!audio) return;

    const handleEnded = () => {
      progressTween.current?.pause(0);
      gsap.set("#progress", { width: "0%" });
      setPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audio]);

  const playAudio = () => {
    if (!audio) return;

    if (!progressTween.current) {
      progressTween.current = gsap.to("#progress", {
        width: "100%",
        duration: 53,
        ease: "none",
        paused: true,
      });
    }

    if (!playing) {
      progressTween.current.play();
      audio.play();
    } else {
      progressTween.current.pause();
      audio.pause();
    }

    setPlaying(!playing);
  };

  return (
    <div id='main_3' className='font-[Big_Shoulders_Display] relative overflow-hidden py-10 sm:px-[10vw] px-0 gap-7 flex flex-col items-center justify-center min-h-screen bg-[#2A2A2A]'>

      <div className='absolute top-[59px] w-full flex items-center h-1.5 bg-[#6d6d6d]'>
        <div id='progress' className='w-[0%] rounded-r-full h-1 bg-[#6C1854]'></div>
      </div>

      <div className='flex z-10 gap-5'>
        <h1 id='start' className='px-4 py-1 border border-white text-white text-2xl bg-[#2A2A2A] font-semibold'>My Story</h1>
        <button onClick={playAudio} className='px-4 py-1 border-[#FF96DF] border hover:bg-[#42243a] cursor-pointer bg-[#6C1854]'><img src={playing ? "offSpeaker.svg" : "speaker.svg"} alt="" /></button>
      </div>
      <p id='bent1' className='text-right text-white px-5 text-2xl'>When I was a kid, I used to wonder how the UI of phones and apps was made. I was fascinated by the design and wanted to create such interfaces myself.
        But due to a lack of knowledge and resources at the time, I couldn’t pursue it further and eventually stopped thinking about it.
        Years later, during college, I got interested in coding and started learning Python. I absolutely loved it.
      </p>
      <div className='flex relative z-[0] my-5 flex-wrap items-center justify-center'>
        <div id='img1' className='flex p-2 px-3 pb-3 border border-black/10 sm:w-64 w-48 flex-col items-center justify-center rotate-[-10.67deg] bg-[radial-gradient(ellipse_40.89%_40.89%_at_50.00%_50.00%,_white_0%,_white_100%)] shadow-[10px_10px_20px_0px_rgba(0,0,0,0.20)]'>
          <img src="pin black.svg" alt="" />
          <img className='sm:h-72 h-56 object-cover' src="my image.jpg" alt="" />
        </div>
        <div id='img2' className='flex p-2 px-3 pb-3 border border-black/10 sm:w-64 w-48 flex-col items-center justify-center rotate-[8.33deg] bg-[#EFEFEF] shadow-[10px_10px_20px_0px_rgba(0,0,0,0.20)]'>
          <img src="pin black.svg" alt="" />
          <img className='sm:h-72 h-56 object-cover' src="/my image2.jpg" alt="" />
        </div>
      </div>
      <p id='bent2' className='text-start z-[1] text-white px-5 text-2xl'>One day, I found myself wishing there was a way to combine my love for coding with UI design. Shortly after, I came across a YouTube video where someone was teaching web development.
        As I watched it, I realized — this was exactly what I had been looking for all along: coding and design together.
        From that day on, I started learning web development, and today, I’m proud to call myself a skilled web developer.
      </p>
      <div id='end' className='w-full flex z-[2] px-5'>
        <a className='px-3 sm:mb-7 mb-[] hover:rounded-full cursor-pointer transition-all flex gap-3 text-white font-bold text-2xl py-2.5 bg-[#6C1854] shadow-[6px_6px_0px_0px_#BABABA] border' href='https://drive.google.com/file/d/1FNP_mUqvsto3GhJpappzsk0pK1RVfAIW/view?usp=drivesdk' target='#'>View Resume <img src="eye icon.svg" alt="" /></a>
      </div>
    </div>
  )
}

export default MyStroy;