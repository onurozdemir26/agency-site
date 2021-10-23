import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";


function index() {
    return (
        <Router>
        <div className="flex flex-row">
            <ul className="flex text-white  ">
                <li className="p-4 mr-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-4 mr-4">
                    <Link to="/">Our Work</Link>
                </li>
                <li className="p-4 mr-4">
                    <Link to="/">About Us</Link>
                </li>
                <li className="p-4 mr-4">
                    <Link to="/">Review</Link>
                </li>
                <li className="p-4 mr-4">
                    <Link to="/">Contact US</Link>
                </li>
            </ul>
            <Switch>
                
                    <Route exact path ="/"></Route>
                    <Route path ="/" ></Route>
                    <Route path ="/" ></Route>
                    <Route path ="/" ></Route>
                    <Route path ="/" ></Route>
                
            </Switch>
        </div>
        </Router>
    )
}

export default index
