import React from "react";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 flex items-center justify-center w-full ">
      <h4 className="opacity-10 text-xs">&copy; {siteConfig.name} {currentYear} | v.{(process.env.NEXT_PUBLIC_APP_VERSION)?.substring(0, 10)}</h4>
    </footer>
  );
};
