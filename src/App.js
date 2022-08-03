import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import UpdateUser from './components/UpdateUser';
import Home from './components/Home';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import { GlobalProvider } from './context/globalState';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
   <div>
   <GlobalProvider>
   <Router>
    <Routes>
      <Route exact path = "/" element = {<Home/>}/>
      <Route path = "/add" element = {<AddUser/>} />
      <Route path = '/edit/:id' element = {<EditUser/>}/>
      <Route path = "/update" element = {<UpdateUser/>}/>
      </Routes>
   </Router>


   </GlobalProvider>

  
   </div>
    
  );
}

export default App;
