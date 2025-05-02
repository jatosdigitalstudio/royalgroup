"use client"
import React from 'react'
import Image from 'next/image';

export default function Quote() {
    return (
      <div className='flex relative justify-center items-center py-32 px-6 bg-blue overflow-hidden'>
        <div className="flex flex-col text-center items-center  md:w-[50%] md:px-22 text-white z-30">
            <div className="" data-aos="zoom-in">
              <Image src="/images/icon-w.png" width={50} height={50} alt='Icon Royal Group' className='mb-4 brightness-200' />
            </div>
            <div className="text-center" data-aos="fade-up">
              <h1 className='text-4xl md:text-6xl mb-6 uppercase'>Investing in tomorrow together</h1>
              <p className='mx-auto w-[70%]'>We believe that strong partnerships between the public and private 
                  sectors are essential to achieving Indonesia’s amitious goals in this digital era. 
                  We Invite you to join us in shaping Indonesia's digital future</p>
            </div>
            
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