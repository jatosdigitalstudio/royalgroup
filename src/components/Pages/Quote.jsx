"use client"
import React from 'react'
import Image from 'next/image';
// import { useScroll, useTransform, motion } from 'framer-motion';
// import { useRef } from 'react';
// import { Button } from '../UI/Button';
// import Link from 'next/link';
export default function Quote() {
    // const container = useRef();
    // const { scrollYProgress } = useScroll({
    //   target: container,
    //   offset: ['start start', 'end start']
    // })
    // const { scrollXProgress } = useScroll({
    //     target: container,
    //     offset: ['start center', 'end center']
    //   })
  
    // const y = useTransform(scrollYProgress, [0, 1], ["-100vh", "50vh"])
    // const x = useTransform(scrollXProgress, [0, 2], ["100vh", "-150vh"])
  
    return (
      <div className='flex relative justify-center items-center py-32 bg-blue overflow-hidden'>
        <div className="flex flex-col text-center items-center  w-[50%] md:px-22 text-white z-30">
            <Image src="/images/icon-w.png" width={50} height={50} alt='Icon Royal Group' className='mb-4 brightness-200' />
            <h1 className='text-4xl md:text-6xl mb-6 uppercase'>Investing in tomorrow together</h1>
            <p className='w-[70%]'>We believe that strong partnerships between the public and private 
                sectors are essential to achieving Indonesia’s amitious goals in this digital era. 
                We Invite you to join us in shaping Indonesia's digital future</p>
        </div>
        <Image 
            src="/images/icon-big.png" 
            alt="Logo Royal Group" 
            width={1000}
            height={1000}
            style={{objectFit: "cover"}} 
            className='absolute z-10 brightness-100'
        />
      </div>
    )
}