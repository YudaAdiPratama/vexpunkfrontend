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
  title: 'Next13 Web3',
  description: 'A Web3 Example on using NextJs 13',
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
            {children}
              <Toaster />
            </ReduxProvider>
          </Providers>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
