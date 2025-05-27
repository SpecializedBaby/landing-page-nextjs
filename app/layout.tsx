import type React from "react"
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "87  BouwGroep",
  description: "Flat Roofs. Built to Last. High-performance waterproof roofing with precision and care.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}