"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function MovementSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Clone the content for seamless looping
    const content = scrollContainer.innerHTML
    scrollContainer.innerHTML = content + content
  }, [])

  return (
    <section className="w-full overflow-x-hidden">
      {/* Blue header section with infinite carousel */}
      <div className="bg-[#3366FF] py-8 overflow-hidden">
        <div className="relative">
          <div
            className="whitespace-nowrap"
            ref={scrollRef}
            style={{
              animation: "marquee 40s linear infinite",
              display: "inline-block",
            }}
          >
            <h2 className="text-[#FFFF00] text-3xl md:text-5xl font-bold uppercase inline-block px-8">
              Un movimiento que une a todos
            </h2>
            <h2 className="text-[#FFFF00] text-3xl md:text-5xl font-bold uppercase inline-block px-8">
              Un movimiento que une a todos
            </h2>
            <h2 className="text-[#FFFF00] text-3xl md:text-5xl font-bold uppercase inline-block px-8">
              Un movimiento que une a todos
            </h2>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col md:flex-row">
        {/* Left side with green background and image */}
        <div className="w-full md:w-1/2 bg-[#008066] p-6 md:p-12 flex items-center justify-center">
          <div className="relative w-full pr-6 flex justify-start overflow-hidden pl-0 ml-0">
            <Image
              src="/Rectangle.webp"
              alt="Mano sosteniendo bolsa de basura"
              width={500}
              height={600}
              style={{ width: "150%", marginLeft: 0 }}
              className="relative z-10"
            />
          </div>
        </div>

        {/* Right side with colored bands and text */}
        <div className="w-full md:w-1/2 flex flex-col relative bg-[#FFF2CC]">
          {/* Cream background for spacing */}
          <div className="h-12"></div>

          <div className="relative w-full flex justify-center overflow-hidden">
            <div>
              <Image
                src="/ColoredBanners.svg"
                alt="Colored Banners"
                width={1200}
                height={700}
                className="relative z-0"
              />
            </div>
          </div>

          {/* Cream background for spacing */}
          <div className="h-12"></div>

          {/* Cream background with text */}
          <div className="bg-[#FFF2CC] py-12 px-6 md:px-12 flex-grow">
            <p className="text-sm md:text-base leading-relaxed">
              Las botellas de plástico, envolturas de comida y restos de basura se acumulan, afectando el entorno
              natural y la experiencia de quienes peregrinan después. La misma ruta que nos guía a la Virgen se llena de
              huellas que no deberían estar ahí. En Círculo Virtuoso Talpa, creemos que la peregrinación debe ser tan
              sagrada para la naturaleza como lo es para nuestros corazones. Es por eso que hemos creado una iniciativa
              para transformar este camino en un trayecto limpio, organizado y sustentable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
