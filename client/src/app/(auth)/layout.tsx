"use client"

import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['vietnamese'] })
export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  //   <html lang='en' suppressHydrationWarning>
  //   <body className={`${inter.className}`}>
  //     <ThemeProvider
  //       attribute='class'
  //       defaultTheme='system'
  //       enableSystem
  //       disableTransitionOnChange
  //     >
  //       {children}
  //     </ThemeProvider>
  //   </body>
  // </html>
   children
  )
}