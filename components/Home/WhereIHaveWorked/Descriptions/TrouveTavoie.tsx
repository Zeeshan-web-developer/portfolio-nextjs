import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Get you E-Shop online on Social Media Own Your Business Data To Grow have your marketing & Delivery sorted headache free",
      keywords: ["E-Shop", "Social Media", "Own Your Business Data To Grow", "marketing & Delivery"],
    },
    {
      text: "Work with a variety of different languages, frameworks, and content management systems such as JavaScript, TypeScript, Next.js/React",
      keywords: ["Next.js/React", "AWS", "Vercel"],
    },
    {
      text: "Work on XMPP chat client, which is a real-time chat application that allows users to communicate with each other via text messages",
      keywords: [
        "XMPP chat client",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@ Mern Stack Developer</span>
          </span>
          {/* Date */}
          {/* <span className="font-mono text-xs text-gray-500">Feb 2022 - Present</span> */}
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
