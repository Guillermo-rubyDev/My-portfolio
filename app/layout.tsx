import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
// Removed unused QueryClient imports
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guillermo Fernandez - Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies, React, Node.js, and cloud solutions. Experienced in building scalable applications and leading development teams.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'TypeScript', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Guillermo Fernandez' }],
  openGraph: {
    title: 'Guillermo Fernandez - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies, React, Node.js, and cloud solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}