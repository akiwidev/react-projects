import { createContext } from "react";

// You should give createContext a default value.
const ThemeContext = createContext(["green", () => { }]);

export default ThemeContext;
