"use client"
// import { motion } from "framer-motion"
// import { fadeUpVariant } from "@/utils/custom"

export default function Company() {
    return (
        <section className="relative h-screen flex items-center justify-center py-32" id="company">
            <div className="container mx-auto px-12">
                <div className="grid grid-cols-2 place-items-center">
                    <div className="bg-[#ffffff] w-[450px] h-[500px]">
                       
                    </div>
                    <div className="text-black flex flex-col justify-center px-6 lg:px-24">
                            <h1 className="text-3xl md:text-4xl font-medium mb-6 uppercase">
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
        </section>
    )
}