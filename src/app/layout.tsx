import type { Metadata } from "next";
import { ThemeProvider } from "@/hooks/useTheme";
import "./globals.css";
import Providers from "./providers";


export const metadata: Metadata = {
  title: "Jonathan MB Portfolio",
  description: "This Portfolio of Jonathan Milolo Beya highlights my skills, my hobbies, the projects I have worked on and my aspirations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ThemeProvider>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
