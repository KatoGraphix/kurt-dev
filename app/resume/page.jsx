"use client";
import { Description } from '@radix-ui/react-dialog';
import { icons, Info } from 'lucide-react';
import{
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact, 
  FaFigma,
  oFaNodeJs,
FaNodeJs,
FaPython } 
  from 'react-icons/fa';
  import {SiTailwindcss, SiMysql, SiMongodb, SiNextdotjs,  } from 'react-icons/si';


//about me 
const about ={
  title: 'About Me',
  Description:"Hi, I’m a passionate Software Developer and Graphic Designer with a love for crafting innovative solutions that solve real-world problems. Curiosity fuels my journey, and technology is my playground. I thrive on tackling complex challenges and turning them into seamless, effective solutions. Continuous learning is my mantra, and I enjoy collaborating with others to create meaningful impact while growing together. Whether through code or design, I aim to bring creativity and efficiency to everything I do.",
  Info:[
    {
      fieldName:"Name",
      fieldValue:"Kurt Von Schaeffer"
    },
    {
      fieldName:"Phone",
      fieldValue:"+27 730867911"
    },
    {
      fieldName:"Experience",
      fieldValue:"2+ years"
    },
    {
      fieldName:"Nationality",
      fieldValue:"South-African"
    },
    {
      fieldName:"Email",
      fieldValue:"kurt@kvsdev.co.za"
    },
    {
      fieldName:"Freelance",
      fieldValue:"available"
    },
    {
      fieldName:"Language",
      fieldValue:"English,Afrikaans"
    },




  ]
};
//exp
const experience = {
  icon:'/assets/resume/badge.svg',
  title: ' My Experience',
  Description:"Experienced Software Developer skilled in JavaScript, React, Node.js, SQL, Java, and Python. I build innovative solutions, solve complex problems, and thrive in collaborative environments.",
  items:[
    {
      company:"Navertica  SA",
      position:"Software Developer",
      duration:"2024-2025"
    },
    {
      company:"Capital Legacy",
      position:"Software Developer",
      duration:"2022-2023"
    },
    {
      company:"Amrod",
      position:"HP READY Graphic layout Artist",
      duration:"2021-2022"
    },
    {
      company:"Amrod",
      position:"Layout Artist",
      duration:"2019-2021"
    },
    {
      company:"Amrod",
      position:"junior Layout Artist",
      duration:"2018-2019"
    },
    
    
  ]
};
//EDUCATION
const education = {
  icon:'/assets/resume/cap.svg',
  title: ' My Education',
  Description:"Experienced Software Developer skilled in JavaScript, React, Node.js, SQL, Java, and Python. I build innovative solutions, solve complex problems, and thrive in collaborative environments.",
  items:[
    {
      institution:"Udemy",
      degree:"SQL bootcamp",
      duration:"2023",
    },
    {
      institution:"Udemy",
      degree:"full stack web development  bootcamp",
      duration:"2022",
    },
    {
      institution:"Rosebank College",
      degree:"Information Technologu in Software Development",
      duration:"2015-2020",
    },
    {
      institution:"CTU Training Solutions",
      degree:"Graphic and Web Design ",
      duration:"2012",
    },
    
    
    
    
  ]
};
//Skills
const skills = {
  title:"my skills",
  Description:" specialize in building efficient, scalable solutions with expertise in both frontend and backend development, delivering seamless end-to-end applications.",
  skillList:[
    {
      icon:<FaHtml5 />,
      name:'html 5',
    },
    {
      icon:<FaCss3 />,
      name:'CSS 3',
    },
    {
      icon:<FaJs />,
      name:'JavaScipt',
    },
    {
      icon:<FaReact />,
      name:'React',
    },
    {
      icon:<SiNextdotjs />,
      name:'Next Js',
    },
    {
      icon:<SiTailwindcss />,
      name:'tailwind',
    },
    {
      icon:<FaNodeJs />,
      name:'node js ',
    },
    {
      icon:<FaFigma />,
      name:'figma',
    },
    {
      icon:<SiMysql />,
      name:'my sql',
    },
    {
      icon:<SiMongodb />,
      name:'mongo db',
    },
    {
      icon: <FaPython />,
      name: 'Python',
    }
  ]
  
};
import{Tabs, TabsContent, TabsList, TabsTrigger} from"@/components/ui/tabs"
import{
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
  } from "@/components/ui/tooltip"
  import{ScrollArea} from "@/components/ui/scroll-area";
  import{easeIn, motion} from "framer-motion";


const Resume = () => {
  return <motion.div 
  initial={{opacity:0}}
   animate={{
    opacity:1,
    transition:{delay:2.4, duration: 0.4,ease: "easeIn"},
   }}

   className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"

   >
    <div className=" mx-auto">
    <Tabs defaultValue="experience" 
    className="flex flex-col xl:flex-row gap-[60px]">
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
        gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about me">About me</TabsTrigger>
        </TabsList>
        {/* content*/}
        <div className="min-h-[70vh] w-full">
          {/* experience*/}
          <TabsContent value="experience" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text text-4xl font-bold">{experience.title}</h3>
            <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
            {experience.Description}
            </p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index)=> {
                  return (
                  <li key={index} className="bg-[#232328] min-h-[184px] py-6 px-10 rounded-xl
                  flex flex-col justify-center items-center lg:items-start
                  gap-1">
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px]
                    text-center lg:text-left">
                      {item.position}
                      </h3>
                      
                    <div className="flex items-center gap-3">
                      {/*dot*/}
                      <span className="w-[6px] h-[6px] rounded-full
                      bg-accent"></span>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </ScrollArea>
          </div>
          </TabsContent>

           {/* education*/}
           <TabsContent value="education" className="w-full">
           <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text text-4xl font-bold">{education.title}</h3>
            <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
            {education.Description}
            </p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item, index)=> {
                  return (
                  <li key={index} className="bg-[#232328] min-h-[184px] py-6 px-10 rounded-xl
                  flex flex-col justify-center items-center lg:items-start
                  gap-1">
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px]
                    text-center lg:text-left">
                      {item.degree}
                      </h3>
                      
                    <div className="flex items-center gap-3">
                      {/*dot*/}
                      <span className="w-[6px] h-[6px] rounded-full
                      bg-accent"></span>
                      <p className="text-white/60">{item.institution}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </ScrollArea>
          </div>
          </TabsContent>
           {/* skills*/}
           <TabsContent value="skills" className="w-full h-full">
          <div className="flex flex-col gap-[30px]">
            <div className="flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.Description}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-">
              {skills.skillList.map((skills, index)=> {
                return <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" flex-auto w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent
                        transition-all duration-300">
                          {skills.icon}
                          </div>
                      </TooltipTrigger>
                      <TooltipContent>
                    <p> {skills.name}</p>
                  </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
              </li>;
              })}
            </ul>
          </div>
          </TabsContent>
           {/* about me*/}
           <TabsContent value="about me" className="w-full text-center xl:text-left">
          <div className=" flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className=" max-w-[900px] text-white/60 mx-auto xl:mx-0">
            {about.Description}
            </p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-9 max-w-[620px]
            mx-auto xl:mx-0">
              {about.Info.map((item, index) => {
                return  <li key={index} className="flex-items justify-center
                xl:justify-start gap-6">
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-xl ml-4">{item.fieldValue}</span>
                </li>
                })}
            </ul>
          </div>
          </TabsContent>

        </div>
      </Tabs>
    </div>
    </motion.div>
}

export default Resume
