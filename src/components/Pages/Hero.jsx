"use client"


export default function Hero() {
  return (
    <section className="max-h-[1200px] w-full flex items-center justify-center" id="home">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen place-items-center">
            <div className="md:p-20">
                <h1 className="text-7xl uppercase text-blue mb-4">Securing and innovating indonesia</h1>
                {/* <h4 className="text-xl uppercase text-blue">powering indonesia's digital future</h4> */}
            </div>
            {/* <div className="bg-blue w-full h-full">
            </div> */}
        </div>
    </section>
  );
}
