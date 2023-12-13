import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
   {
    text: "Utilized React and Bootstrap to enhance the user interface and user experience of the Inspected platform, ensuring a seamless and visually appealing remote inspection process.",
    keywords: ["React", "Bootstrap", "User Interface", "User Experience", "Inspected platform"],
  },
  {
    text: "Implemented JWT token for secure authentication, enhancing the overall security and integrity of the Inspected platform.",
    keywords: ["JWT Token", "Authentication", "Security", "Inspected platform"],
  },
  {
    text: "Developed React protected routes to control access and ensure that sensitive information is only accessible to authorized users, enhancing the privacy and confidentiality of data on the Inspected platform.",
    keywords: ["React Protected Routes", "Authorization", "Privacy", "Inspected platform"],
  },
  {
    text: "Designed and implemented multi-user functionality, allowing diverse user roles to interact seamlessly with the Inspected platform, promoting collaboration and efficiency.",
    keywords: ["Multi-User Functionality", "User Roles", "Collaboration", "Inspected platform"],
  },
  {
    text: "Contributed to the creation of a centralized hub within Inspected, providing a dedicated compliance solution to promote a safe workplace and prioritize the health and safety of workers during remote inspections.",
    keywords: ["Centralized Hub", "Compliance Solution", "Health and Safety", "Inspected platform"],
  },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Engineer <span className="text-AAsecondary">Reactjs</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Aug 2021 - Feb 2022</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
