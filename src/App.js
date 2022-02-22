import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Forms from './components/Forms';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert]= useState(null);
  const [mode, setMode]= useState("light");
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#343a40";
      setAlert("Dark mode enabled");
      setTimeout(() => {
       setAlert(null);
      }, 2000);
      document.title= "TextUtils-DarkMode";
    }
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor="white";
      setAlert("Light mode enabled");
      setTimeout(() => {
       setAlert(null);
      }, 2000);
      document.title= "TextUtils-LightMode"
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
    <Alerts alert={alert} setAlert={setAlert} />
     <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          <Forms heading="Enter Your Text Here" mode={mode} setAlert={setAlert} />
   
          </Route>
        </Switch>
        </Router>
    </>

  );
}

export default App;
//By kashish classNameNameName, htmlFor,tabIndex
//Jsx fragment
// we use exact path because react do partial matching of routes that's why it is always preferable to use "exact"
//about "cls"