import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IdealFresh() {
  const tasks = [
    {
    text: "Led the development of a real-time chat application using Erlang, leveraging its concurrent and fault-tolerant capabilities for optimal performance.",
    keywords: ["Erlang", "Real-time Chat", "Concurrent Programming", "Fault-Tolerant"],
  },
  {
    text: "Implemented XMPP (Extensible Messaging and Presence Protocol) to enable seamless communication and real-time data exchange within the chat application.",
    keywords: ["XMPP", "Real-time Communication", "Data Exchange"],
  },
  {
    text: "Utilized WebSockets to establish a persistent and efficient connection between the server and clients, ensuring instant message delivery and low-latency communication.",
    keywords: ["WebSockets", "Persistent Connection", "Low-Latency Communication"],
  },
  {
    text: "Collaborated with a team of developers to enhance the scalability and responsiveness of the chat application, accommodating a growing user base.",
    keywords: ["Collaboration", "Scalability", "Responsiveness"],
  },
  {
    text: "Developed features to support multimedia content sharing within the chat app, enriching user interactions with images, videos, and other file types.",
    keywords: ["Multimedia Content Sharing", "User Interactions", "File Sharing"],
  },
  {
    text: "Integrated security measures, including end-to-end encryption, to ensure the confidentiality and privacy of user messages and data.",
    keywords: ["Security Measures", "End-to-End Encryption", "User Privacy"],
  },
  {
    text: "Provided ongoing maintenance and troubleshooting support, addressing issues promptly to maintain a reliable and seamless chat experience for users.",
    keywords: ["Maintenance", "Troubleshooting", "User Experience"],
  },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Fullstack Developer <span className="text-AAsecondary">React , Erlang</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June 2019 - July 2021</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
