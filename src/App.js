import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Components/Main/Main";
import { ThemeContext, initialState,Themes } from "./contexts/theme";

function App() {
  const [theme, setTheme] = useState(initialState);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Routes>
        <Route exact path="/" element={<Main    />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
