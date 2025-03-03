"use client"

import {useState} from "react";
import Image from 'next/image';
import Modal from '../UI/Modal';
import Card from "../UI/Card";
import { SECTOR } from "@/lib/data";
import { useWidthSize } from "@/utils/custom";

export default function Product() {
    const [selectedSector, setSelectedSector] = useState(null);
    const { isMobile } = useWidthSize()

    return (
        <section className="lg:h-screen py-24" id='companies'>
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
                            style={isMobile ? "" : sector.style}
                            onClick={() => setSelectedSector(sector)}
                            data-aos="fade-up"
                       />
                    ))}
                </div>
                <Modal
                    sector={selectedSector}
                    onClose={() => setSelectedSector(null)}
                />
            </div>
        </section>
    );
}
