import logo from './logo.svg';
import './App.css';


import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './Alert';



function App() {
  const [mode, setMode]=useState('dark');//wheater cheak darkmode is enabled or not
  const toggleMode= ()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.background='grey'
    }
    else{
      setMode('light')
      document.body.style.background='white';
      // showAlert("Light mode has been enabled", "success");


    }
  }
  
  
  return (
   <>
<Navbar titles="TextUtils" mode={mode} toggleMode={toggleMode} ></Navbar>
{/* <Navbar ></Navbar> */}
<Alert  alert=" this is alert"/>

<div className='container my-3'>
<TextForm heading="Enter the text to analyze below"></TextForm>
{/* <About/> */}

</div>


</>
  );
}

export default App;
