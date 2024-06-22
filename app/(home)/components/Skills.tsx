import React from 'react'
import Title from './ui/Title';
import {HoverEffect} from '../components/ui/card-hover-effect'
import { FaNodeJs, FaDocker, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill,  RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiPrisma } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiReact } from "react-icons/si";
import { SiHono } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
function Skills(){

    interface skillType {
        title: string,
        icon:  React.ReactElement
    }

   const skills: skillType[] = [
    {
        title: "Javascript",
        icon: <IoLogoJavascript />,
    },
    {
        title: "ReactJs",
        icon: <SiReact />,
    },
    {
        title: "Typescript",
        icon: <SiTypescript/>,
    },
    {
        title: "NextJs",
        icon: <RiNextjsFill/>,
    },
    {
        title: "TailwindCss",
        icon: <RiTailwindCssFill/>,
    },
    {
        title: "NodeJs",
        icon: <FaNodeJs/>,
    },
    {
        title: "MongoDB",
        icon: <SiMongodb/>,
    },
    {
        title: "Hono",
        icon: <SiHono/>,
    },
    {
        title: "PostgresSQL",
        icon: <DiPostgresql/>,
    },
    {
        title: "Prisma",
        icon: <SiPrisma/>,
    },
    {
        title: "Docker",
        icon: <FaDocker/>,
    },
    {
        title: "Git & Github",
        icon: <FaGithub/>,
    },
   
   ]
// console.log(skills)
  return (
    <div className='md:max-w-4xl mx-auto overflow-hidden'>
        <div className='flex justify-center'>
            <Title title="Skills🦾" className='mt-32 mb-2 -rotate-[10deg] text-center'></Title>
        </div>
        <div className='mx-auto overflow-hidden'>
             <HoverEffect items={skills} className=""/>
        </div>
    </div>
  )
}

export default Skills;