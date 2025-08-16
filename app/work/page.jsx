"use client";
import {motion} from 'framer-motion';
import React, { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/react';
import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import 'swiper/swiper-bundle.css';

import {Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger} 
  from '@/components/ui/tooltip';

  import Link from 'next/link';
  import Image from 'next/image';
  import WorkSliderBtns from '@/components/WorkSlidesBtns';

  const projects = [
    {
      num: '01',
      category: 'Full Stack E-commerce',
      title: 'Suevanna Beauty',
      description: 'A professional e-commerce website for a lash artist business, featuring product catalog, booking system, and modern design.',
      stack:[{name:"Html 5"}, {name:"Css 3"},{name:"Javascript"}],
      Image:'/assets/work/Thumb1.png',
      live:"https://www.suevanna-beauty.com/",
      github:"https://github.com/KatoGraphix/suevanna-beauty-1.git",
        
        
    },
    {
      num: '02',
      category: 'FullStack Todo App',
      title: 'TaskMaster Pro',
      description: 'A modern, responsive todo application built with React that helps you organize tasks, projects, and notes with a beautiful, intuitive interface.',
      stack:[{name:"React "}, {name:"Tailwind"},{name:"Next js"}],
      Image:'/assets/work/Thumb2.png',
      live:"",
      github:"https://github.com/KatoGraphix/Todo_App.git",
        
    },
    {
      num: '03',
      category: 'Frontend Drawing App',
      title: 'Retro Sketch',
      description: 'Create your own pixel art in a retro-inspired, feature-rich drawing app with multiple tools and color palettes.',
      stack:[{name:"Html 5"}, {name:"CSS"},{name:"Javascript"}],
      Image:'/assets/work/Thumb3.png',
      live:"https://retro-sketch.vercel.app/",
      github:"https://github.com/KatoGraphix/RETRO-SKETCH.git",
    },
    {
      num: '04',
      category: 'Frontend Weather App',
      title: 'Weather Forecast',
      description: 'A responsive weather application that provides real-time weather updates and forecasts based on user location or search queries.',
      stack:[{name:"Node js"}, {name:"Tailwind"},{name:"Next js"}],
      Image:'/assets/work/Thumb4.png',
      live:"https://cyan-ardenia-13.tiiny.site/",
      github:"https://github.com/KatoGraphix/weather-app-assesment.git",
    },
  ];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slider index
    const currentIndex = swiper.activeIndex;
       //get current slider index
       setProject(projects[currentIndex]);
       
  };

  return  (
  <motion.section
  initial={{opacity: 0}}
  animate={{opacity: 1,
  transition:{ delay:0.1, duration:0.4, ease:"easeIn"}
}}
  className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
  >
    <div className="container mx-auto px-4">
      <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-8">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
        xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            {/*outline num */}
            <div className="text-4xl sm:text-6xl xl:text-8xl leading-none font-extrabold text-transparent
            text-outline">
              {project.num}
              
            </div>
             {/*project category */}
             <h2 className="text-2xl sm:text-3xl xl:text-[42px] font-bold leading-none text-white
             group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
              </h2>
               {/*project description */}
               <p className="text-sm sm:text-base text-white/60">{project.description}</p>
               {/*project stack */}
               <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index)=> {
                  return (
                  <li key={index} className="text-lg xl:text-xl text-accent">
                    {item.name}
                    {/*remove the last comma*/}
                    {index !== project.stack.length -1 && ","}
                    </li>
                  );

                })}
               </ul>
               {/*border */}
               <div className="border border-white/20"></div>
               {/*Buttons */}
               <div className=" flex items-center gap-4">
                 {/*live project button */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text:3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                 {/*Github project button */}
                 <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text:3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                
               </div>
          </div>
          </div>
        <div className="w-full xl:w-[50%]">
          <Swiper 
          spaceBetween={0}
           slidesPerView={1} 
           className="w-full h-auto min-h-[300px] xl:min-h-[400px] mb-12"
           onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => {
            return (
            <SwiperSlide key={index} className="w-full">
              <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] xl:h-[460px] relative group flex justify-center
              items-center bg-pink-50/20 rounded-lg overflow-hidden">
                 {/*image*/}
                 <div className="relative w-full h-full">
                  <Image 
                  src={project.Image} 
                  fill 
                  className="object-cover object-center"
                  alt={`${project.title} project screenshot`}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority={index === 0}
                  />
                 </div>
              </div>
            </SwiperSlide>
            );
            })}
            {/*slider button*/}
            <WorkSliderBtns
           containerStyles="flex gap-2 absolute right-0 bottom-
           [calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max 
           xl:justify-none"
           btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-
           [44px] h-[44px] flex justify-center items-center transition-all"
           />
          </Swiper>
          </div>
      </div>
    </div>
    </motion.section>
  );
  
};

export default Work;

