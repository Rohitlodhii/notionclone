import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import {Toaster} from 'sonner'
import { ModalProvider } from "@/components/providers/modal-provider";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Smaran",
  description: "Your Knowledge Hub, Built to Evolve",
  icons: {
    icon: [
      {
        url: "/logo.svg", // Changed from 'href' to 'url'
        media: "(prefers-color-scheme: light)",
        rel : "icon"
      },
      {
        url: "/logo.svg", // Changed from 'href' to 'url'
        media: "(prefers-color-scheme: dark)",
        rel:"icon"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
        <ThemeProvider 
        
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="smaran-theme"
          

        >
          <Toaster position="bottom-center" />
          <ModalProvider />
        {children}
        </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
