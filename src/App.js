
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState }from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState('dark');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>
  {
     setAlert({
       msg:message,
       type:type

     })
     setTimeout(()=>{
  setAlert(null);
     },1500);
  }
   const toggleMode=()=>
  {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");
    }
    
  }
  return (
    <>
  <Router>
     <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}/>
      <Alert  alert={alert}/>
     <div className="container my-3">
      
     <Routes>
     <Route exact path="/about" element={<About mode={mode} />} />
     <Route exact  path="/"   element={<Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode}/> }
      />
        </Routes> 
        </div>
        </Router>

      
     
          {/* <Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>  */}
           {/* <About/>  */}
          {/* </div> */}
        {/* </Router> */}
    </>
    
  );
}

export default App;

       
