import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      layout
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
