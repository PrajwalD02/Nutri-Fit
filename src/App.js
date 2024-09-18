
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Home/Navbar'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Copywrite from "./Components/Home/Copywrite";
import Nutrients from './Components/Nutrients/Nutrients';
import News from "../src/Components/News/News";
import ErrorBoundary from "./ErrorBoundary";



function App() {
  const [Food, setFood] = useState("");

  useEffect(() => {
    setFood("");
  }, [Food]);

  const handleOnClick = async () => {

    const inputValue = document.getElementById("searchFood").value;
    setFood(inputValue);
  };



  return (
    <>
      <Router>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>


          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path='/' element={< Home onClick={handleOnClick} />}></Route>
              <Route exact path='/about' element={< About />}></Route>
              <Route exact path='/Nutrients' element={< Nutrients food={Food} />}></Route>
              <Route exact path='/News' element={< News />}></Route>
            </Routes>
            <Copywrite />
          </div>
        </ErrorBoundary>
      </Router>

    </>
  );
}

export default App;



