"use client";
 
import React from'react'
import Title from "./ui/Title";
import ProjectCard from './ProjectCard';

function Project() {

  interface ProjectType {
    name: string,
    description: string,
    subDesc: string,
    image: string,
    liveLink: string,
    githubLink: string
  }

  const projects: ProjectType[] = [
    {
        name: "Wall clock zone",
        description: "This project aims to create a digital platform connecting wall clock suppliers directly with buyers and facilitating real-time communication between them.",
        subDesc: "Tech Stack: React, Redux, ChakraUi, Socket.io, Nodejs, ExpressJs, Mongodb",
        image: require('/public/WallClockZone.png'),
        liveLink: '/',
        githubLink:'https://github.com/NamrataChandarana/wallclockzone-backend'
    },
    {
        name: "DevTales",
        description: "A blog posting app that enabling users to create and view blogs. The main features lines in the deployment as it is deployed serverless.",
        subDesc: "Tech Stack: React, Redux, TaiwindCss, Hono, clodfalre Workers, Postgress , prisma ",
        image: require('/public/DevTales.png'),
        liveLink: '/',
        githubLink:'https://github.com/NamrataChandarana/DevTales'
    },
    {
        name: "Paytm Wallet clone",
        description: "This project aims to develop a basic Paytm wallet clone where users can create accounts and transfer money to each other.",
        subDesc: "Tech Stack: React, Redux, TaiwindCss, Nodejs, ExpressJs, Mongodb",
        image: require('/public/patmyClone.png'),
        liveLink: '/',
        githubLink:'https://github.com/NamrataChandarana/paytm-Wallet-clone'
    },
  ]
  return (
    <div>
        <div className='flex justify-center'>
            <Title title='Projects🚀' className='mt-5 mb-14 -rotate-[10deg] text-center'/>
        </div>
        <div className='flex gap-3 justify-center flex-wrap md:flex-wrap mx-10'>
            {
                projects.map((project: ProjectType,index) => (
                    <ProjectCard project={project} key={index}/>
                ))
            }
        
        </div>
    </div>
  )
}

export default Project