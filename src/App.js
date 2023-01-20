import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';


function App() {
  return (
    <>
  
      <Navbar title='VikasMeena' AboutText='New One'/>
      <div className='container my-3'>
        {/* <TextForm heading='Enter your feedback here:-  '/> */}
        <About/>
        </div>
      
    </>
  );
}

export default App;
