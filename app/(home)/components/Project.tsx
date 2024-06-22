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
        description: "A modern wall clock with a futuristic design sdfdsf",
        subDesc: "Tech Stack: React, Redux, TaiwindCss, HonoJs, clodfalre Workers, Postgress , prisma ",
        image:'/',
        liveLink: '/',
        githubLink:'https://github.com/NamrataChandarana/wallclockzone-backend'
    },
    {
        name: "DevTales",
        description: "A blog posting app similar to Medium, not that fancy yet. enabling users to create and view blogs. The main features lines in the deployment as it is deployed serverless.",
        subDesc: "Tech Stack: React, Redux, TaiwindCss, Hono, clodfalre Workers, Postgress , prisma ",
        image: require('/public/DevTales.png'),
        liveLink: '/',
        githubLink:'https://github.com/NamrataChandarana/DevTales'
    },
    {
        name: "Paytm Wallet clone",
        description: "A modern wall clock with a futuristic design sdfdsf",
        subDesc: "Tech Stack: React, Redux, TaiwindCss, HonoJs, clodfalre Workers, Postgress , prisma ",
        image: '/',
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
                projects.map((project: ProjectType) => (
                    <ProjectCard project={project} />
                ))
            }
        
        </div>
    </div>
  )
}

export default Project