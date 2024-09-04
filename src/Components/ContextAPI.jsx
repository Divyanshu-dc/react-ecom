import React, { createContext, useState } from "react";
export const Theme = createContext("light");

const ContextAPI = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
  );
};

export default ContextAPI;
