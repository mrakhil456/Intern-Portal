 
import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react';
import Dashboard from './Components/Dashboard';
import { Routes, Route} from 'react-router-dom';
import Alert from './Components/Alert';
import Auth from './Components/Auth';

function App() {
   const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
      const [alert, setAlert] = useState(null);
      const showAlert = (message,type) =>{
          setAlert({
              msg:message,
              type:type
          })
          setTimeout(() => {
              setAlert(null);
              
          }, 1500);
      }
      const toggleMode = () => { 
           switch (mode) {
          case 'light':
              setMode('dark');
              document.body.style.backgroundColor = '#222831';
              document.title="Fundraising-Dark Mode";
              showAlert("Dark Mode has been Enabled","success ");
              
              break;
          case 'dark':
               setMode('light');
              document.body.style.backgroundColor = 'white';
              document.title="Fundraising-Light Mode";
              showAlert("Light Mode has been Enabled","success ")
              break;
  
         
          default:document.body.style.backgroundColor = '#056b9359';
          
         }
         
       };
  return (
     <>
     <Navbar title="INTERN'S"  about="About US" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     
     <div>
         
     <Routes>
        <Route path="/" element={<Auth mode={mode} toggleMode={toggleMode}/> } />
         <Route path="/login" element={<Auth initialMode="login" mode={mode} toggleMode={toggleMode}/>} />
        <Route path="/signup" element={<Auth initialMode="signup" mode={mode} toggleMode={toggleMode}/>} />
        
      <Route path="/Dashboard" element={ <Dashboard mode={mode} toggleMode={toggleMode}/>} />  
    </Routes>
          </div>
     </>
  );
}

export default App;
