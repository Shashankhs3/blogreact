import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Blog from './components/Home/blog.js/Blog';
import Blogdetails from './components/Project/Blogdetails';
import Sighnin from './components/Auth/Auth/Sighnin';
import SignUp from './components/Auth/Auth/SignUp';
import Createblog from './components/Project/Createtblog';
import About from './components/layout/About';
import Loader from './components/layout/Loader'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar></Navbar> 
     <Switch>
       <Route exact path="/" component={Blog}/>
       <Route path="/blog/:id" component={Blogdetails}/>
       <Route path="/signin" component={Sighnin}/>
       <Route path="/signup" component={SignUp}/>
       <Route path="/create" component={Createblog}/>
       <Route path="/about" component={About}/>
       <Route path="/loading" component={Loader}/>



     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
