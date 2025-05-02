'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 500)
    }

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const jumpAnimation = {
        y: [0, -10, 0, -10, 0],
        transition: {
            y: {
            duration: 0.7,
            ease: 'easeOut',
            repeat: 1,
            },
        },
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-16 right-5 z-50"
            >
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className='bg-black p-2 md:p-4 rounded-full'
                >
                    <FaArrowUp
                        size={20}
                        color='white'
                        absoluteStrokeWidth={true}
                        strokeWidth={1.5}
                    />
                </motion.button>
            )}
        </motion.div>
    ) 
} 

export default BackToTopButton

