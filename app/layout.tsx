import { ThemeProvider } from "@/components/theme-provider"
import Providers from './_providers/Providers'
import { Inter } from 'next/font/google'
import { ReduxProvider } from "@/redux/provider";
import { Toaster } from "@/components/ui/toaster"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Define the RootLayoutProps type
type RootLayoutProps = {
  children: React.ReactNode; // You can adjust the type of children as needed
};

export const metadata = {
  title: 'VEX PUNK',
  description: 'This Dapp For Minting Vex Punk NFT ',
}

// Your RootLayout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <ReduxProvider>
              <div className="min-h-screen flex flex-col justify-center items-center px-4">
            {children}
            </div>
              <Toaster />
            </ReduxProvider>
          </Providers>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
