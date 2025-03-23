"use client"
// import { motion } from "framer-motion"
// import { fadeUpVariant } from "@/utils/custom"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';

export default function Company() {
    return (
        <section className="relative h-screen flex items-center justify-center my-24" id="about">
            <div className="container mx-auto px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                    <div className="" >
                        <DotLottieReact
                            src="https://lottie.host/fa76d6b0-dff1-4c73-a923-a2f4bf763ba3/XT157Ndazy.lottie"
                            loop
                            autoplay
                        />
                        <div className="text-left md:ml-14 uppercase" data-aos="fade-right">
                            <h6 className='font-third text-2xl mb-4'>
                               Powering Indonesia's 
                            </h6>
                            <h6 className='text-7xl ml-[-6px] text-blue'>
                               Digital Future
                            </h6>
                        </div>
                    </div>
                    <div className="text-black flex flex-col text-right mt-8 lg:px-24">
                        <div className="flex flex-col items-end" data-aos="zoom-in">
                            <Image src="/images/icon.png" width={50} height={50} alt='Icon Royal Group' className='right-0' />
                            <h1 className="text-xl uppercase text-blue mt-2">About Us</h1>
                        </div>
                        <div 
                            data-aos="fade-left" 
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <h1 className="text-2xl md:text-4xl font-medium my-6 uppercase">
                                Achieving Excellence throught Collaboration
                            </h1>
                            <p>
                                Royal Group was established in Jakarta on September 2013 The company's creation 
                                resulted from a synergy of long-time business partners who decided to team up to 
                                offer their customers a more comprehensive solution to their needs.
                                <br/><br/>
                                Royal Group owns and operates subsidiaries that cover several industries such as 
                                Defense and Security, Healthcare, Digital Transformation, Blockchain, Identity, and Lifestyle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}