"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { fadeUpVariant } from "@/utils/custom";
export default function Hero() {
  return (
    <section className="max-h-[1200px] w-full flex items-center justify-center" id="home">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen place-items-center px-8">
            <div className="md:p-20" data-aos="fade-up">
                <h1 className="text-5xl lg:text-7xl uppercase text-blue mb-4">Securing and innovating indonesia</h1>
            </div>
            {/* <div className="bg-blue w-full h-full">
            </div> */}
        </div>
    </section>
  );
}
