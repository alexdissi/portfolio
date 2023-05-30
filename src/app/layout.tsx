import './globals.css'

export const metadata = {
  title: 'Alexandre Dissi',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-bglight dark:bg-bgdark'>
      <body className='bg-bglight dark:bg-bgdark mx-5 sm:mx-20'>{children}</body>
    </html>
  )
}

