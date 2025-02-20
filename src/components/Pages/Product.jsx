"use client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Product() {
  return (
    <section className="h-screen py-24" id='product'>
        <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col justify-center items-center">
                <Image src="/images/icon.png" width={50} height={50} alt='Icon Royal Group' />
                <h1 className="text-xl uppercase text-blue my-2">Our Products</h1>
                <p className='text-center'>
                    Royal Group evolving as a strategic partner, is now focused on 
                    five key sectors <br/> driving Indonesia’s future in this digital era.
                </p>
            </div>

            <div className="grid grid-cols-4 grid-rows-5 gap-6 mt-12 text-white">
                <Link href="/" className="row-span-2 bg-blue min-h-[400px]">
                    <div className='p-6 bottom-0'>Defense & Security</div>
                </Link>
                <Link href="/" className='bg-blue'>
                    <div className='p-6 bottom-0'>Digital Transformation</div>
                </Link>
                <Link href="/" className="col-start-2 row-start-2 bg-blue">
                    <div className='p-6 bottom-0'>Biotechnology</div>
                </Link>
                <Link href="/" className="row-span-2 col-start-3 row-start-1 bg-blue min-h-[400px]">
                    <div className='p-6 bottom-0'>Sustainability</div>
                </Link>
                <Link href="/" className="row-span-2 col-start-4 row-start-1 bg-blue min-h-[400px]">
                    <div className='p-6 bottom-0'>Lifestyle</div>
                </Link>
            </div>
        </div>
    </section>
  );
}
