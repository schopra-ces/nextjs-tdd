import './globals.css'
import { TITLE } from '@/constants'

export const metadata = {
  title: TITLE
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto max-w-2xl p-4 bg-slate-300 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
