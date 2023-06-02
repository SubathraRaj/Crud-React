import React from 'react';
import { BrowserRouter as Router , Routes ,  Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Forms/LoginForm';
import WithOutNav from './Pages/withoutNav';
import WithNav from './Pages/withNav';
import Timer from './Forms/useSessionTimer';

function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route element={<WithOutNav/>}>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Route>
      <Route element={<WithNav/>}>
      <Route path='/home' element ={[ <Home/>, <Timer/>]} />
        <Route path='/about' element = {[<About/>, <Timer/>]}/>
       </Route>

      </Routes>
  </Router>


    </div>

  );
}

export default App;