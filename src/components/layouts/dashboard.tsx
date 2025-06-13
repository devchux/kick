import React from "react";
import Sidebar from "../sidebar";
import Navbar from "../navbar";
import { cn } from "@/lib/utils";

const DashboardLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main className="flex h-dvh overflow-hidden">
      <Sidebar />
      <section className="h-full w-full flex flex-col overflow-auto">
        <Navbar />
        <section className={cn("py-14 px-10", className)}>
          <div className="mx-auto max-w-[73.25rem]">{children}</div>
        </section>
      </section>
    </main>
  );
};

export default DashboardLayout;
