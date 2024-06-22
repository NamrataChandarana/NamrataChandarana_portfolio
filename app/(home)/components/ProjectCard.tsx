"use client"
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { request } from "http";

interface ProjectType {
  name: string,
  description: string,
  subDesc: string,
  image: string,
  liveLink: string,
  githubLink: string
}
interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
  return (
    <CardContainer className="inter-var">
        <CardBody className="bg-slate-800 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[18rem] sm:w-[24rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-md group-hover/card:shadow-xl mb-7"
            alt="thumbnail"
          />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-gray-200 dark:text-white"
          >
           {project.name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-gray-300 text-sm max-w-sm mt-2 dark:text-neutral-300 text-justify"
          >
            {project.description}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-gray-300 text-sm max-w-sm mt-2 dark:text-neutral-300 text-justify"
          >
            {project.subDesc}
          </CardItem>

          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as={Link}
              href={project.githubLink}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Github →
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              href={project.liveLink}
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Live
            </CardItem>
          </div>
        </CardBody>
        </CardContainer>
  )
}

export default ProjectCard