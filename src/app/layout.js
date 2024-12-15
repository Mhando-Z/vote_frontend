import "./globals.css";

export const metadata = {
  title: "Vote",
  description: "Online voting system, fair and square",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
