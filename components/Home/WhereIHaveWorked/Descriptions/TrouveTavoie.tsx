import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
  {
    text: "Transform and optimize existing Angular store into a dynamic and responsive E-Shop using React, Redux, and Tailwind CSS",
    keywords: ["React", "Redux", "Tailwind CSS", "E-Shop"],
  },
  {
    text: "Integrate and enhance the online presence on Social Media platforms to maximize reach and engagement",
    keywords: ["Social Media", "Online Presence", "Engagement"],
  },
  {
    text: "Implement Google Maps integration to provide users with a location-based experience on the E-Shop",
    keywords: ["Google Maps", "Location-Based Experience"],
  },
  {
    text: "Develop and implement React Error Boundary for a robust and error-free user experience",
    keywords: ["React Error Boundary", "Error-Free", "User Experience"],
  },
  {
    text: "Create visually compelling data visualizations using Charts.js to provide users with insightful analytics",
    keywords: ["Charts.js", "Data Visualizations", "Analytics"],
  },
  {
    text: "Collaborate with a variety of languages, frameworks, and content management systems including JavaScript, TypeScript, Next.js/React, AWS, and Vercel",
    keywords: ["JavaScript", "TypeScript", "Next.js/React", "AWS", "Vercel"],
  },
  {
    text: "Contribute to the development of an XMPP chat client, enabling real-time communication through text messages",
    keywords: ["XMPP chat client", "Real-time Communication", "Text Messages"],
  },
];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          Title
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@ Mern Stack Developer</span>
          </span>
          Date 
           <span className="font-mono text-xs text-gray-500">Feb 2022 - Present</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
