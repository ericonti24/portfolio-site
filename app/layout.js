"use client"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: '#2b2b2b'}}>
        {children}
      </body>
    </html>
  );
}
