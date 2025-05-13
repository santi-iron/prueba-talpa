import type React from "react"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Círculo Virtuoso de TALPA",
  description: "Círculo Virtuoso de TALPA - El camino de la fe y la responsabilidad",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${raleway.variable} font-raleway`}>{children}</body>
    </html>
  )
}
