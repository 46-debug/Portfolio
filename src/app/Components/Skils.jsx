"use client";
import { useEffect, useState, useRef } from "react";

const Skils = () => {

    const [currPositionX, setCurrPositionX] = useState(null);
    const [currPositionX1, setCurrPositionX1] = useState(null);
    const htmlRef = useRef(null);
    const htmlRef1 = useRef(null);

    useEffect(() => {
        const update = () => {
            const rect = htmlRef.current?.getBoundingClientRect();
            const rect1 = htmlRef1.current?.getBoundingClientRect();
            if (rect) {
                const x = rect.left + rect.width / 2;
                setCurrPositionX(x);
            }

            if (rect1) {
                const x1 = rect1.left + rect1.width / 2;
                setCurrPositionX1(x1);
            }
        };

        update();
    }, [currPositionX, currPositionX1]);

    return (
        <>
            <div className='h-screen bg-gradient-to-b from-zinc-800 to-black relative flex justify-around'>
                <h1 id="text" className="absolute sm:top-5 text-[100px] [text-shadow:_0px_0px_20px_rgb(255_255_255_/_1.00)] text-[#ffffff] font-[Pixelify_Sans]">Skills</h1>

                {currPositionX !== null && (
                    <>
                        <svg className="absolute w-full h-screen">
                            <path id="path_1" d={`M${currPositionX} 213 
    C${currPositionX} 200, ${currPositionX} 400, ${currPositionX} 720 
    C${currPositionX} 800, ${window.innerWidth / 2 - 10} 750, ${window.innerWidth / 2} ${window.innerHeight}`} stroke="#636363" strokeWidth={3} fill="none" />
                            <path id="path_2" d={`M${window.innerWidth / 2} 212 L${window.innerWidth / 2} ${window.innerHeight}`} stroke="#636363" strokeWidth={3} fill="none" />
                            <path id="path_3" d={`M${currPositionX1} 213 
    C${currPositionX1} 200, ${currPositionX1} 400, ${currPositionX1} 720 
    C${currPositionX1} 800, ${window.innerWidth / 2} 750, ${window.innerWidth / 2} ${window.innerHeight}}`} stroke="#636363" strokeWidth={3} fill="none" />
                        </svg>

                        <svg className="absolute w-full h-screen">
                            <g filter="url(#filter0_d_494_152)">
                                <path className="glowPath" d={`M${currPositionX} 217 C${currPositionX} 200, ${currPositionX} 400, ${currPositionX} 720 C${currPositionX} 800, ${window.innerWidth / 2 - 10} 750, ${window.innerWidth / 2} ${window.innerHeight}`} stroke="white" strokeWidth={2} fill="none" />
                                <path className="glowPath" d={`M${window.innerWidth / 2} 212 L${window.innerWidth / 2} ${window.innerHeight}`} stroke="white" strokeWidth={2} fill="none" />
                                <path className="glowPath" d={`M${currPositionX1} 217 C${currPositionX1} 200, ${currPositionX1} 400, ${currPositionX1} 720 C${currPositionX1} 800, ${window.innerWidth / 2} 750, ${window.innerWidth / 2} ${window.innerHeight}}`} stroke="white" strokeWidth={2} fill="none" />
                            </g>
                            <defs>
                                <color-interpolation-filters id="filter0_d_494_152" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <flood-opacity flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_494_152" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_494_152" result="shape" />
                                </color-interpolation-filters>
                            </defs>
                        </svg>
                    </>
                )}

                <div className="flex flex-col relative z-[1] items-center justify-center gap-25">
                    <div ref={htmlRef} className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="html.svg" alt="" />HTML</div>
                    <div className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="css.svg" alt="" />CSS</div>
                    <div className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="js.svg" alt="" />JS</div>
                    <div className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="react.svg" alt="" />React</div>
                </div>

                <div className="flex flex-col relative z-[1] items-center justify-center gap-25">
                    <div className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="node.svg" alt="" />Node</div>
                    <div className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="mongo.svg" alt="" />MongoDB</div>
                    <div className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="tan.svg" alt="" />Tan Stack</div>
                    <div className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="figma.svg" alt="" />Figma</div>
                </div>

                <div className="flex flex-col relative z-[1] items-center justify-center gap-25">
                    <div ref={htmlRef1} className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="html.svg" alt="" />HTML</div>
                    <div className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="html.svg" alt="" />HTML</div>
                    <div className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="html.svg" alt="" />HTML</div>
                    <div className="flex bg-gradient-to-b from-white to-neutral-400 border-2 border-neutral-500 sm:gap-2 gap-1 rounded-full sm:text-xl tetxt-md sm:px-4 px-2 py-1 font-semibold font-[Poppins] items-center justify-center"><img src="html.svg" alt="" />HTML</div>
                </div>
            </div>
        </>
    )
};

export default Skils;

