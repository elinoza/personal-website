import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from "react";
import {Routes,Route} from "react-router-dom"



import Main from "./Components/Main/Main"
import { ThemeContext,initialState } from './contexts/theme';

function App() {
  const [theme,setTheme] =useState(initialState)
  return (
<Routes>
<ThemeContext.Provider value={[theme,setTheme]}>
  <Route exact path="/" element={<Main/>} />
  </ThemeContext.Provider>
</Routes>

  );
}

export default App;
