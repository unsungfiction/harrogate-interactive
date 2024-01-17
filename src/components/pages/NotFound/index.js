import React from "react";
import { Link } from "react-router-dom";
 

export default function PageNotFound() {
    return (
        <div id="notfound">
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <div id="notfoundlinks">
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}