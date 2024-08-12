"use client"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: '#101010'}}>
      {/* <body > */}
        {children}
      </body>
    </html>
  );
}
