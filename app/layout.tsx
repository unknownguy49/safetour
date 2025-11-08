import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { PanicButton } from "@/components/panic-button";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Tourist Safety Monitoring System",
  description:
    "AI-powered tourist safety monitoring with blockchain digital IDs, geo-fencing, and real-time incident response",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Suspense>
        <PanicButton />
        <Analytics />
      </body>
    </html>
  );
}
