import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';  //react-router
import NavBar from './NavBar'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import ImageSearchPage from './ImageSearch/ImageSearch'
import UserCard from './Home/profiles/UserCard'

const App = () =>{
    return(
        //Surround whole application with browser router to be able to use routes
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Route exact path='/' component={Home}/> 
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/image-search' component={ImageSearchPage}/>
                {/* Footer */}
                {/* To prevent react-router treating other pages as a subset of the home page, explicitly define /home or use an exact path */}
            
                <Route path='/profile/:userid' component={UserCard}/> 
            </div>
        </BrowserRouter>
    )
}

export default App;