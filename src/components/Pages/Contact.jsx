"use client"
import Image from "next/image";
import { useState } from "react";
export default function Contact() {
    const [loading,setLoading] = useState(false)
    const [formValues, setFormValues] = useState({
        access_key: "e745f91f-06f5-4e24-a184-6e6046385fec",
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setFormValues({ ...formValues, [name]: value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formValues),
        });
        const result = await response.json();
        if (result.success) {
        window.alert("Thakyou for your submission. We'll reach out to you soon.");
        setFormValues({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        setLoading(false)
        } else (
        setLoading(false)
        )
}

    return (
        <section className="py-36 px-8" id="contact">
            <div className="container mx-auto px-6">
                <div className="flex flex-col justify-center items-center">
                    <div className="mb-12" data-aos="zoom-in">
                        <Image src="/images/logo-h-main.png" width={300} height={100} alt="Logo Royal Group" className="mb-6" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="mb-6" data-aos="fade-up">
                            <h1 className="font-bold mb-2">Office:</h1>
                            <p>EightyEight@Kasablanca, 3rd Floor <br/> Jl. Raya Kasablanka, Kav. 88 <br/> South jakarta, 12870</p>
                        </div>
                        <div className="mb-6" data-aos="fade-up">
                            <h1 className=" font-bold mb-2">Contact:</h1>
                            <div className="flex flex-col">
                                <span className="text-md">+6221-22831337</span>
                                <span className="text-md">+6221-22832642</span>
                            </div>
                      
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}
