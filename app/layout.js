// "use client"
export const metadata = {
  title: "Eric Ontiveros Portfolio",
  description: "Personal portfolio site to show software engineering experience, skills and projects."
}

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
 