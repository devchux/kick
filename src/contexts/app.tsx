import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useMedia } from "react-use";

export const AppContext = createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const isTablet = useMedia("(min-width: 768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(isTablet);
  }, [isTablet]);

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
