"use client"

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center py-32" id="home">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen place-items-center px-8">
            <div className="md:p-20" data-aos="fade-up">
                <h1 className="text-5xl lg:text-7xl uppercase text-blue mb-4 font-third">Securing and innovating indonesia</h1>
            </div>
        </div>
    </section>
  );
}
