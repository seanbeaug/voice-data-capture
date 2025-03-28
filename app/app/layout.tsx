import './globals.css'

export const metadata = {
  title: 'Voice Data Capture App',
  description: 'A voice-activated data capture and reminder application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
