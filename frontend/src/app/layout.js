import "./globals.css";
import Header from "@/src/components/Header";
import { AuthProvider } from "../components/Hooks/useAuth"; // Adjust the path if needed


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-light"
      >
        <AuthProvider>
        <Header />
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
