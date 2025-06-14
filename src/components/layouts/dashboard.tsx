import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import Navbar from "../navbar";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import MobileNavbar from "../navbar/mobile";
import { useMedia } from "react-use";

const DashboardLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isTablet = useMedia('(min-width: 768px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(isTablet);
  }, [isTablet])

  return (
    <main className="flex h-dvh overflow-hidden relative">
      <button
        onClick={toggleSidebar}
        className={cn(
          "cursor-pointer absolute z-[51] top-14 hidden md:inline-flex justify-center items-center w-6 h-6 rounded-full bg-black/40 border border-white/25",
          { "left-64": isSidebarOpen, "left-1": !isSidebarOpen }
        )}
      >
        <ChevronRightIcon className="w-3.5 h-3.5" />
      </button>
      <Sidebar isOpen={isSidebarOpen} />
      <section className="h-full w-full flex flex-col overflow-auto">
        <Navbar />
        <MobileNavbar toggle={toggleSidebar} />
        <section className={cn("py-7 md:py-14 px-5 md:px-10", className)}>
          <div className="mx-auto max-w-[73.25rem]">{children}</div>
        </section>
      </section>
    </main>
  );
};

export default DashboardLayout;
