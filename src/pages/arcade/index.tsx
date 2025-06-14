import ArcadeCard from "@/components/cards/arcade";
import DashboardLayout from "@/components/layouts/dashboard";
import React from "react";

const Arcade = () => {
  return (
    <DashboardLayout className="!pt-0">
      <section>
        <h4 className="text-xl font-semibold my-5">All Games</h4>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <ArcadeCard key={index} />
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Arcade;
