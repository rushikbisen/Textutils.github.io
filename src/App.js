
import Alert from './component/Alert';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Dark from './component/Dark';
import {BrowserRouter,Routes, Route,Navigate} from "react-router-dom";
import Page from './component/Page';

import React, {useState} from 'react';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode=()=>{
    if(mode === 'dark'){
      setMode ('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
      // Document.title='TextUtils for dark mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amzing Mode'
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils '
      // },1500);
    }
    else{
      setMode ('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success");
      // Document.title='TextUtils for dark mode';
    }
  }
  return (
    <>
    {/* <Navbar title="New youtuer" aboutText="About textutils"/> */}
    {/* <Navbar/> */}
    {/* <Navbar title="textutils" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3"> */}

    <BrowserRouter>
    <Navbar title="textutils" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route path="/text"element={  <Textform showAlert={showAlert}heading="TextUtils- Word Counter, Character Counter, Remove Extra Space" mode={mode}/>}/>
      <Route path="/dark"element={<Dark mode={mode}/>}/>
      <Route path="/*" element={<Navigate to="/text"/>}/>
    </Routes>
    </div>
    </BrowserRouter>


  {/* <Textform showAlert={showAlert}heading="Enter the text" mode={mode}/> */}
    {/* <Dark/> */}
    
  
      </>
  );
}
export default App;
