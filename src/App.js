import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import {withRouter} from "react-router-dom"
import Main from "./Components/Main/Main"

function App() {
  return (
<Routes>
  <Route exact path="/" component ={Main} />
</Routes>

  );
}

export default App;
