import React from "react";
import Sidebar from "../sidebar";
import Navbar from "../navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-dvh overflow-hidden">
      <Sidebar />
      <section className="h-full w-full flex flex-col overflow-auto">
        <Navbar />
        <section className="py-14 px-10">{children}</section>
      </section>
    </main>
  );
};

export default DashboardLayout;
