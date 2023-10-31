import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route} from "react-router-dom"

import Main from "./Components/Main/Main"

function App() {
  return (
<Routes>
  <Route exact path="/" element={<Main/>} />
</Routes>

  );
}

export default App;
