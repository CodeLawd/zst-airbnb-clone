import React, { useState, useEffect } from "react";
import { Navbar, Filters, MobileNavigation } from ".";

const Header = () => {
  const [scrollTop, setScrollTop] = useState(false);
  

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setScrollTop(window.pageYOffset > 100));
    }
  }, []);

  
  return (
    <div className={`${scrollTop && "shadow-md"} sticky top-0 z-10`}>
      <Navbar />
      <Filters />
    </div>
  );
};

export default Header;
