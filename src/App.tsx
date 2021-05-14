import React from 'react';
import Header from './component/Header/header'
import {Switch, Route} from 'react-router-dom'

import './App.css';
import HeroSection from './pages/Landing page/hero section/hero-section';
import LoginPage from './pages/login page/login-page';
import SignUp from './pages/signup page/signup-page';
import UserRole from './pages/user role page/user-role';


function App() {
  return (
    <div className='app'>

      <Header/>
      <Switch>
        <Route exact path='/' component={HeroSection} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/select-role' component={UserRole} />
      </Switch>
    </div>
      
    
  );
}

export default App;
