import React from 'react'
import Logo from '../../../img/logo.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

function index() {
    return (
        <div className="bg-indigo-900">
            <div className="flex flex-row container mx-auto justify-between">
                <div className="py-10">
                    <img src={Logo} alt="" className="text-white" />
                    <p className="text-white py-6">On the other hand, we denounce with righteous indignation and dislike men.</p>
                    <h3 className="text-white py-1">Interested To Work With Us</h3>
                    
                </div>
                <Router>
                    <div className="flex ">
                        <div className="flex flex-col py-10 ">
                            <h3 className="text-white text-lg font-bold">Company</h3>
                            <ul className=" text-white  ">
                                <li className="">
                                    <Link to="/">About Us</Link>
                                </li>
                                <li className="">
                                    <Link to="/">Protfolio</Link>
                                </li>
                                <li className="">
                                    <Link to="/">Page</Link>
                                </li>
                                <li className="">
                                    <Link to="/">FAQ</Link>
                                </li>
                                <li className="">
                                    <Link to="/">Reviews</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col py-10 ml-10">
                            <h3 className="text-white text-lg font-bold">Support</h3>
                            <ul className=" text-white  ">
                                <li className="">
                                    <Link to="/">Contact Us</Link>
                                </li>
                                <li className="">
                                    <Link to="/">Privacy policy</Link>
                                </li>
                                <li className="">
                                    <Link to="/">tram of use</Link>
                                </li>
                                <li className="">
                                    <Link to="/">Buy & Sell</Link>
                                </li>
                                <li className="">
                                    <Link to="/">Reviews</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col py-10 ml-10">
                            <h3 className="text-white text-lg font-bold">Contact</h3>
                            <ul className=" text-white  ">
                                <li className="">
                                    <Link to="/">Madani Ave, usa 1212</Link>
                                </li>
                                <li className="">
                                    <Link to="/">+8802-55662000</Link>
                                </li>
                                <li className="">
                                    <Link to="/">Email: www.uixzone12.com</Link>
                                </li>
                                <li className="">
                                    <Link to="/">Buy & Sell</Link>
                                </li>
                                <li className="">
                                    <Link to="/">Reviews</Link>
                                </li>
                            </ul>
                            <Switch>

                                <Route exact path="/"></Route>
                                <Route path="/" ></Route>
                                <Route path="/" ></Route>
                                <Route path="/" ></Route>
                                <Route path="/" ></Route>

                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
            <div className="border-2 border-gray-800  mx-auto container">
                <div></div>
            </div>
            <div className="flex flex-row justify-between mx-auto container py-10">
                <div className="flex">
                    <p className="text-white ">Terms of Service</p>
                    <p className="text-white ml-4">Privacy Policy</p>
                    <p className="text-white ml-4">Security</p>
                </div>
                <div className="">
                    <FontAwesomeIcon icon={faFacebook} className="fa-2x hover:text-blue-500"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitterSquare} size={2} className="fa-2x hover:text-blue-700 ml-10"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faYoutube} className="fa-2x hover:text-red-600 ml-10"></FontAwesomeIcon>

                </div>
                <div>
                    <p className="text-white">© 2020 MotiveZone All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default index
