import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";

export default function AboutMe() {
  const technologies = [
    ["Reactjs", "Next.js","JavaScript (ES6+)", "Tailwind CSS"],
    ["Tailwind CSS", "Node.js", "TypeScript", "Framer Motion"],
  ];
  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400  tracking-wide">
                Hello! My name is Zeeshan Ahmad and I enjoy solving problems and creating codes that live on the internet.
             
              </span>
            </div>
            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                 As a
        <span className="text-AAsecondary"> MERN stack developer</span> 
        specializing in SAAS e-commerce projects, I possess a strong skill set in
        developing and delivering exceptional digital experiences. With my expertise
        in MongoDB, Express.js, React.js, and Node.js, I am proficient in building robust
        and scalable web applications. I have a deep understanding of the e-commerce domain,
        including features like product management,
        shopping carts, secure payment gateways, and user authentication. By utilizing
        frameworks such as Redux , I optimize the performance and user
        experience of
        <span className="text-AAsecondary">        SAAS e-commerce applications
</span>
        . Additionally, I have experience
        integrating with third-party APIs and services to enhance functionality
        and provide seamless experiences for customers
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">Here are a few technologies I&apos;ve been working with recently:</span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img src={"/hero-bg.jpg"} className={"object-contain rounded-lg"} alt="My Image Not Found" />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img src={"/img/titof.jpg"} className={"object-contain rounded-lg"} alt="My Image Not Found" />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
