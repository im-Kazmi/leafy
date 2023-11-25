import type { Metadata } from "next";
import { Inter, Poppins, Questrial } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeContextProvider from "@/context/ThemeContext";
import "./prism.css";
const inter = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Leafy | Home",
  description:
    "Leafy: Your premier destination for eco-conscious living. Explore sustainable practices, innovative green solutions, and the latest environmental trends. Join our community and cultivate a greener tomorrow. 🌿 #Sustainability #EcoLiving #GreenCommunity",
  icons: {
    icon: "/assets/images/leaf.svg",
    href: "/assets/images/leaf.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <ThemeContextProvider>
          <body className={inter.className}>{children}</body>
        </ThemeContextProvider>
      </ClerkProvider>
    </html>
  );
}
