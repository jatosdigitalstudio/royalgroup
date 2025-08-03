'use client'
import Link from "next/link"
import React from "react"
import ExportedImage from "next-image-export-optimizer";

export default function Footer() {
    return (
        <footer className="bg-blue">
            <div className="max-w-[78rem] mx-auto p-8 lg:pt-12">
                <div className="flex justify-center text-center text-white">
                            <Link href={"/"} className="flex items-center gap-2 text-white text-xl font-semibold">
                                <ExportedImage src="/images/logo-v-second.png" width={150}  height={200} alt="Logo Royal Group"   />
                            </Link>
                        </div>
                <div className="mt-10 border-t border-gray-300 pt-6">
                    <div className="text-center ">
                        <p className="mt-2 text-sm text-gray-200 sm:order-first sm:mt-0">Copyright &copy; 2025 royalgroup.co.id</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}