import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-app text-app">
        <div className="flex justify-between items-center">
          <h1 className="text-xl p-4 font-semibold ">Portfolio Dashboard</h1>
          <header className="p-4 flex justify-end">
            <ThemeToggle />
          </header>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
