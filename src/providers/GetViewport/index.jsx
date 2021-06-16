import { useEffect } from 'react';
import { useContext, createContext, useState } from 'react'

const ViewportContext = createContext('')

export const ViewportProvider = ({ children }) => {
  const [viewport, setViewport] = useState(() => {
    return JSON.parse(localStorage.getItem("@DevelopingHabitus:viewport")) || {};
  });

  const getWindowDimension = () => {
    const width = window.innerWidth 
              || document.documentElement.clientWidth
              || document.body.clientWidth;
    const height = window.innerHeight
              || document.documentElement.clientHeight
              || document.body.clientHeight;
    return {width, height}
  };
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewport(getWindowDimension())
      localStorage.setItem( "@DevelopingHabitus:viewport", JSON.stringify(getWindowDimension()))
    })
  }, [])

  return(
    <ViewportContext.Provider value={{ viewport }}>
      {children}
    </ViewportContext.Provider>
  )
}

export const useViewport = () => useContext(ViewportContext)