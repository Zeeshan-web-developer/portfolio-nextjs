"use client";
import AppContext from '@/components/AppContextFolder/AppContext';
import React from 'react'
import { useRef, useState } from "react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
     const timerCookie = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling:{
        IntervalEvent:null
      }
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });
  return (
      <AppContext.Provider value={{ sharedState, setSharedState }}> 
        {children}
         
    </AppContext.Provider>  
  )
}
