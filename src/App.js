import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';


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
     }, 1500);
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
  
      <Navbar title='VikasMeena' AboutText='New One' mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        <TextForm heading='Enter your feedback here:-' mode={Mode} showAlert={showAlert}/>
        {/* <About/> */}
        </div>
      
    </>
  );
}

export default App;
