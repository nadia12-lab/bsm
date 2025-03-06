import { DataProvider } from "@/context/DataContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
