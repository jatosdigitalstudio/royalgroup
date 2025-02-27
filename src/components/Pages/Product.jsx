"use client"

import {useState} from "react";
import Image from 'next/image';
import Modal from '../UI/Modal';
import Card from "../UI/Card";
import { SECTOR } from "@/lib/data";


export default function Product() {
    const [showModal, setShowModal] = useState(false);
    const [selectedSector, setSelectedSector] = useState(null);

    return (
        <section className="h-screen py-24" id='companies'>
            <div className="container mx-auto px-6 lg:px-12" id='modal-root' >
                <div className="flex flex-col justify-center items-center">
                    <div className="" data-aos="zoom-in">
                        <Image src="/images/icon.png" width={50} height={50} alt='Icon Royal Group' />
                    </div>
                    <div className="text-center" data-aos="fade-up">
                        <h1 className="text-2xl uppercase text-blue my-2">Our Companies</h1>
                        <p className='text-md'>
                            Royal Group evolving as a strategic partner, is now focused on 
                            five key sectors <br/> driving Indonesia’s future in this digital era.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-2 mt-12 text-white content-end" >
                    {SECTOR.map((sector) => (
                         <Card
                            key={sector.id}
                            sector={sector}
                            style={sector.style}
                            onClick={() => setSelectedSector(sector)}
                            data-aos="fade-up"
                       />
                    
                    ))}
                </div>
                <Modal
                    sector={selectedSector}
                    onClose={() => setSelectedSector(null)}
                />

                {/* <div className="grid grid-cols-4 grid-rows-5 gap-2 mt-12 text-white" >
                    <button onClick={() => setSelectedSector()} className="row-span-2 bg-blue min-h-[400px]">
                        <div className='p-6 bottom-0'>Defense & Security</div>
                    </button>
                    {showModal &&
                        <Modal onClose={() => setShowModal(false)}>
                            Hello from the modal!
                        </Modal>
                    }
                    <div href="/" className='bg-blue'>
                        <div className='p-6 bottom-0'>Digital Transformation</div>
                    </div>
                    <div href="/" className="col-start-2 row-start-2 bg-blue">
                        <div className='p-6 bottom-0'>Biotechnology</div>
                    </div>
                    <div href="/" className="row-span-2 col-start-3 row-start-1 bg-blue min-h-[400px]">
                        <div className='p-6 bottom-0'>Sustainability</div>
                    </div>
                    <div href="/" className="row-span-2 col-start-4 row-start-1 bg-blue min-h-[400px]">
                        <div className='p-6 bottom-0'>Lifestyle</div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
