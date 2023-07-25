import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full dark:bg-slate-800 dark:text-white bg-gray-200 min-h-screen flex flex-col relative">
      <Header />
      <main className="flex flex-row">
        <Sidebar />
        {children}
      </main>
      <Footer />
    </div>
  );
}
