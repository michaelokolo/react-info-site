import React from 'react'
import './App.css';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  const[darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode(){
    setDarkMode(preDarkMode => !preDarkMode)
  }
  return (
    <div className="container">
        <Navbar 
          toggleDarkMode = {toggleDarkMode}
          darkMode = {darkMode}
        />
        <Main darkMode = {darkMode}/>
    </div>
  );
}

export default App;
