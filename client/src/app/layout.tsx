import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Inter, Roboto } from "next/font/google"; // Import trực tiếp từ thư viện google font
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import AppProvider from "@/app/AppProvider";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

// const roboto = Roboto({ subsets: ['vietnamese'], weight: ['100', '300'] })

// const myFont = localFont({
//   src: [
//     {
//       path: './Roboto-Thin.ttf',
//       weight: '100'
//     },
//     {
//       path: './Roboto-Regular.ttf',
//       weight: '400'
//     }
//   ],
//   display: 'swap',
//   variable: '--font-roboto'
// })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");

  return (
    // <html lang="en">
    //    <header>Header</header>
    //   {/* <body className={inter.className}>{children}</body> */}
    //   {/* <body className={`${myFont.variable}`}>{children}</body> */}
    //   <body className={roboto.className}>{children}</body>
    // </html>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <AppProvider inititalSessionToken={sessionToken?.value}>
            {children}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
