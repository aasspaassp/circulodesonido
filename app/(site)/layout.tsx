import '../globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { SignalIcon } from '@heroicons/react/24/outline'
import { getPages } from '@/sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Circulo de estudio del sonido',
  description: 'Powered by aassp',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // get all pages
  const pages = await getPages();
  return (
    <html lang="es">





      <body>
        <header className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-300 via-sky-400 to-emerald-700 flex items-center justify-between'>
          <Link href='/'
          >
            <div className='flex flex-row content-center'>
              <SignalIcon className="h-8 w-12 text-gray-800" />
              <span className="text-gray-800 font-bold text-2xl">SONICOCO</span>
            </div>
          </Link>
          <div className='flex items-center gap-3 mx-4'>
            {pages.map((page) => (
              <Link key={page._id}
              href={`/${page.slug}`}
              className='hover:underline'>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className='py-20'>
        {children}
        </main>
      </body>
    </html>
  )
}
