import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

// Metadata for the web app.
export const metadata = {
  title: 'Warehouzit',
  description: 'Technical Interview Solution by Omole Daniel Ayodeji',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
