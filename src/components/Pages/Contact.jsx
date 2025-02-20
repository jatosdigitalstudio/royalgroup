"use client"
import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-full flex items-center justify-center py-24" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2  place-items-center">
            <div className="bg-blue w-full h-full">
            </div>
            <div className="flex flex-col ml-12">
                <Image src="/images/logo-h-main.png" width={150} height={100} alt="Logo Royal Group" className="ml-[-10px] mb-6" />
                <div className="mb-6">
                    <h1 className="font-bold mb-2">Office:</h1>
                    <p>EightyEight@Kasablanca, 3rd Floor <br/> Jl. Raya Kasablanka, Kav. 88 <br/> South jakarta, 12870</p>
                </div>
                <div className="">
                    <h1 className="font-bold mb-2">Contact Us:</h1>
                    <div className="bg-white w-[350px] h-[350px]">
                        Form Message
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
