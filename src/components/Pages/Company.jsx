"use client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ExportedImage from "next-image-export-optimizer";

export default function Company() {
    return (
        <section className="relative h-screen flex items-center justify-center my-24 z-40" id="about">
            <div className="container mx-auto px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                    <div className="" >
                        <DotLottieReact
                            src="/indonesia.lottie"
                            loop
                            autoplay
                        />
                        <div className="text-left md:ml-14 uppercase" data-aos="fade-right">
                            <h1 className='font-third text-2xl mb-4'>
                               Powering Indonesia's 
                            </h1>
                            <h1 className='text-7xl ml-[-6px] text-blue'>
                               Digital Future
                            </h1>
                        </div>
                    </div>
                    <div className="text-black flex flex-col text-right mt-8 lg:px-24">
                        <div className="flex flex-col items-end" data-aos="zoom-in">
                            <ExportedImage src="/images/icon-about.png" width={50} height={50} alt='Icon Royal Group' className='right-0' />
                            <h1 className="text-xl uppercase text-blue mt-2">About Us</h1>
                        </div>
                        <div data-aos="fade-right">
                            <h1 className="text-2xl md:text-4xl font-medium my-6 uppercase">
                                Achieving Excellence through Collaboration
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