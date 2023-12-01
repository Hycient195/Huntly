import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Footer from './_components/Footer'

const epilogue = Epilogue({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Huntly',
  description: 'Seearch locally for global jobs',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/logo.svg"
          type="image/svg"
          sizes="<generated>"
        />
      </Head>
      <body className={`${epilogue.className}`}>
        {children}
      </body>
    </html>
  )
}
