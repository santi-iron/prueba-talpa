import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left side with orange background and image */}
        <div className="w-full md:w-1/2 bg-[#FF6600] relative p-6 md:p-12">
          <div className="relative mx-auto max-w-md">
            <Image src="/Group1.webp" alt="Peregrino en el camino" width={500} height={700} className="relative z-10" />
          </div>
        </div>

        {/* Right side with cream background and text */}
        <div className="w-full md:w-1/2 bg-[#FFF2CC] p-6 md:p-12 flex items-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">El camino de la fe y la responsabilidad</h1>

            <p className="mb-4 text-sm md:text-base">
              Cada año, miles de peregrinos emprenden el camino hacia Talpa de Allende con un mismo propósito: visitar a
              la Virgen de Talpa y agradecerle por los milagros recibidos.
            </p>

            <p className="mb-6 text-sm md:text-base">
              Es una ruta de fe, sacrificio y devoción, donde cada paso refleja la esperanza y el amor de quienes
              caminan hasta su santuario. Pero en este trayecto de entrega y reflexión, también enfrentamos una realidad
              que ensombrece nuestra tradición: los residuos que quedan a lo largo del camino.
            </p>

            <Link href="#mision">
              <button className="mission-button">Nuestra Misión</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
