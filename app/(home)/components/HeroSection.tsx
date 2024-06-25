"use client"
import Link from "next/link";
import '../../globals.css'
// import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Button } from "../components/ui/moving-border";
import Title from "./ui/Title";

export default function HeroSection() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  function scroll(){
    scrolltoHash('contact')
  }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 text-white text-center lg:space-x-52 lg:text-left ">
          <div className="lg:ml-20 ml-0 order-last lg:order-first ">
            <div>
              <h1 className="font-bold text-4xl mt-20 md:mt-10 lg:text-6xl">
                Namaste!🙏<br />
                <span className="underline underline-offset-8 decoration-indigo-500">I'm Namrata.</span>
              </h1>
            </div>
            <div className="text-[1.20rem] lg:text-md my-10 mx-5 sm:w-96 sm:mx-auto lg:mx-0"> 
              <p> Based in India, I'm a Fullstack developer passionate about building a modern web application that users love.</p>
            </div>
            <div className="" onClick={scroll}>
              <Link href={"mailto:namratachandarana20@gmail.com"}  >
                <Title title="Contact Me📬" />
              </Link> 
            </div>
          </div>
          <div className="my-10 mx-auto ">
            <div className="w-72 h-72 space-y-8 relative z-10">
              <div className="flex gap-3 translate-x-8 -rotate-[30deg]">
                  <div className="w-32 h-32 rounded-2xl bg-green-500 "></div>
                  <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
              </div>
              <div className="flex gap-3 translate-x-8 -rotate-[30deg]">
                  <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                  <div className="w-32 h-32 rounded-full bg-green-500"></div>
              </div>
              <div className="glow absolute top-[35%] right-1/2 -z-10"></div>
            </div>

            <div className="absolute bottom-15">
              <Button
                borderRadius=".5rem"
                className="bg-slate-900 text-white dark:border-slate-800 rounded-sm h-10 p-5 z-10 "
                >
                  <Link href="" download="">Download CV ⬇️</Link>
              </Button>
            </div>
          </div>
        </div>
    )
} 