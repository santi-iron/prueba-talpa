import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/LogoNav.svg" alt="Círculo Virtuoso de TALPA" width={150} height={50} priority />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="#inicio" className="nav-link">
            Inicio
          </Link>
          <Link href="#nosotros" className="nav-link">
            Nosotros
          </Link>
          <Link href="#unete" className="nav-link">
            Únete
          </Link>
          <Link href="#mision" className="nav-link">
            Misión
          </Link>
          <Link href="#donar" className="nav-link">
            Donar
          </Link>
        </nav>

        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
