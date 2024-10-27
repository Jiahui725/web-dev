"use client";
import { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    console.log({ open });
    setOpen((prev) => !prev);
  };

  return (
    <FilterContext.Provider value={{ open, toggle }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
