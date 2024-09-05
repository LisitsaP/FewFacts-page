import '../globals.css';

export const metadata = {
  title: 'Few Facts news page',
  description: 'FewFacts is here to deliver you all the latest interesting facts',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      
      <body>
        {children}
        </body>
    </html>
  )
}
