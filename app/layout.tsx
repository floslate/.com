import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { GithubLogo, Envelope, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { Header } from "@/components/header";


const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable} h-screen flex flex-col  overflow-hidden`}>

        <Header />

        <main className="flex-1 overflow-y-auto overflow-x-hidden w-full relative">
          {children}
        </main>

        <footer className="sticky bottom-0 z-50 border-t bg-muted/50 backdrop-blur supports-[backdrop-filter]:bg-muted/60 shrink-0">
          <div className="container  p-4">
            <div className="grid  grid-flow-col gap-4 text-xs uppercase justify-start items-start">

              <a href="https://github.com/prophecyAPPs" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <span>Github</span>
              </a>
              <a href="mailto:hey.charlotte@icloud.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/charlotte-bondarev-4962a5264/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
