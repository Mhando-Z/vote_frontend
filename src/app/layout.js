import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-activity/dist/library.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@/context/UserContext";

export const metadata = {
  title: "Vote",
  description: "Online voting system, fair and square",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
