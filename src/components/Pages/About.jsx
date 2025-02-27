// "use client"
// import React, {useEffect} from "react";
// import Image from 'next/image';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import * as motion from "motion/react-client"
// import { useInView } from "motion/react"

// export default function About() {
//     const ref = useRef(null)
//     const isInView = useInView(ref)

//   return (
//     <section className="h-screen py-24" id='about'>
//         <div className="container mx-auto px-6 lg:px-12">
//             <div className="flex flex-col justify-center items-center" data-aos="fade-up">
//                 <Image src="/images/icon.png" width={50} height={50} alt='Icon Royal Group' />
//                 <h1 className="text-xl uppercase text-blue mt-2" data-aos="fade-up">About Us</h1>
//                 <DotLottieReact
//                     src="https://lottie.host/fa76d6b0-dff1-4c73-a923-a2f4bf763ba3/XT157Ndazy.lottie"
//                     className='h-[36em] my-[-6em]'
//                     loop
//                     autoplay
//                 />
//             </div>
//             <motion.div 
//                 variants={fadeUpVariant3}
//                 initial="initial"
//                 animate="animate"
//                 className="flex items-end justify-between mt-12">
//                 <h6 className='text-left uppercase'>
//                     Powering Indonesia's <br/>
//                     <span className='text-7xl text-blue'>Digital Future</span>
//                 </h6>
//                 <h6 className='text-right uppercase'>
//                     Royal Group evolving as <br/> a strategic partner, is now focused on 
//                     five key sectors <br/> driving Indonesia’s future in this digital era.
//                 </h6>
//             </motion.div>
//         </div>
//     </section>
//   );
// }
