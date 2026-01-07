import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-app text-app">
        <header className="p-4 flex justify-end">
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}
