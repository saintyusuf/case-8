import { PrimeReactProvider } from "primereact/api"
import "primereact/resources/themes/lara-light-indigo/theme.css"

export const metadata = {
  title: "Yusuf Akbaba - Juvenis Case"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{padding: 0, margin: 0}}>
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  )
}
