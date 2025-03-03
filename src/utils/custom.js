
import { useEffect, useState } from "react"

export const useWidthSize = () => {
  const [widthWindow, setWidthWindow] = useState(768)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      const widthWindowInsideResize = window.innerWidth
      if (widthWindowInsideResize <= widthWindow) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { isMobile, widthWindow }
}

export function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export const fadeUpVariant = {
  initial: {opacity: 0, y: 100},
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}; 


export const fadeUpVariant2 = {
  initial: {opacity: 0, y: 100},
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
}; 


export const fadeUpVariant3 = {
  initial: {opacity: 0, y: 100},
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}; 