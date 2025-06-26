import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skils = () => {

    // gsap.registerPlugin(ScrollTrigger, useGSAP);

    // useGSAP(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "#main_4",
    //             start: "top 80%",
    //             end: "top 60%",
    //             scrub: 1,
    //         },
    //     });

    //     tl.from(".skill_card", {
    //         scale: 0,
    //         duration: 2,
    //         stagger:0.2,
    //         ease: "power3.out",
    //     })
    // }, []);

    return (
        <>
            <div id='main_4' className='flex-col min-h-screen overflow-hidden items-center justify-start gap-10 p-5 bg-gradient-to-b bg-[#2A2A2A] relative flex'>
                <h1 id="text" className="text-[50px] [text-shadow:_0px_0px_20px_rgb(255_255_255_/_1.00)] text-[#ffffff] font-[Pixelify_Sans]">Skills</h1>

                <div id="btn_hover" className="flex sm:w-1/2 w-full flex-wrap z-[1] items-center justify-around sm:gap-25 gap-10">
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="html.svg" alt="" />HTML</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="css.svg" alt="" />CSS</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="js.svg" alt="" />JS</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="react.svg" alt="" />React</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="node.svg" alt="" />Node</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="mongo.svg" alt="" />MongoDB</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="tan.svg" alt="" />Tan Stack</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="figma.svg" alt="" />Figma</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="tailwind.svg" alt="" />Tailwind</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="boots.svg" alt="" />Bootstrap</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="redux.svg" alt="" />Redux</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="fireb.svg" alt="" />Firebase</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="postm.svg" alt="" />Postman</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="npm.svg" alt="" />NPM</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="clerk.svg" alt="" />Clerk</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="wordp.svg" alt="" />Wordpress</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="next.svg" alt="" />Next.js</div>
                    <div className="skill_card flex hover:shadow-[0px_0px_20px_#FFF] cursor-pointer overflow-hidden transition-all bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="ex.svg" alt="" />Express</div>
                </div>
            </div>
        </>
    )
};

export default Skils;

