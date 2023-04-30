import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  const [Mode, setMode] = useState('light'); //dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
     setAlert({
        msg: message,
        type: type
     }) 
     setTimeout(() => {
      setAlert(null)
     }, 2000);
    }

  const toggleMode = () => { 
    if(Mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white'; 
      showAlert("Light mode is enabled","success");
    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor='#27085a'; 
      showAlert("Dark mode is enabled","success"); 
    }
   }

  return (
    <>
      
    <Router>
      

      <Navbar title="TextUtils" AboutText="About" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route>

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={Mode}/>}>

            </Route>
          </Routes>


      </div>


      </Router>
      
    </>
  );
}

export default App;
