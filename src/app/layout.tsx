import './globals.css'
import { Inter } from 'next/font/google'
import { ClientProviders } from '@/components/client-providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Virendra Gawande - Cybersecurity Professional',
  description: 'Information Security Officer, Penetration Tester, and Cybersecurity Expert helping businesses strengthen their digital security.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}