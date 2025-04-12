import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gray-100">
      <Header />
      <main className="flex-grow pt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
