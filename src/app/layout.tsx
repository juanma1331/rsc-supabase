import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="flex items-center justify-between flex-wrap bg-slate-100 py-6 px-2 border-b border-b-slate-300">
            <p>Cool Navbar</p>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
