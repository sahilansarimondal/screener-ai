import { SiteFooter } from "@/components/layout/footer";
import { MainNav } from "@/components/layout/main-nav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <MainNav />
      {children}
      <SiteFooter />
    </div>
  );
};

export default layout;
