import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import ContactForm from "./components/contact-form";

export default function Home() {

  return (
    <>
      <div className="bg-black min-w-[100%] min-h-screen h-auto overflow-hidden">
        <div className="bg-grid-white/[0.04] h-[58rem] lg:h-[35rem]">
          <div className=" w-full" > 
            <div className="w-[100%]" >
              <Navbar />
            </div>
            <HeroSection  />
          </div>
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Project />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
        <div>
          <Navbar className="flex flex-col space-y-2 border-t border-gray-500 mx-10 mb-3" />
        </div>
      </div>
    </>
  );
}
