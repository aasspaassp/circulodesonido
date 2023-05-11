import '../globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Circulo de estudio del sonido',
  description: 'Powered by aassp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">

      <body>
        {children}
      </body>
    </html>
  )
}
