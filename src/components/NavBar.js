import React from 'react';
import "./NavBar.css";
import {FiMenu, Fix} from 'react-icons/fi';


// const navBarLinks =[
//     {

//     }
// ]

function NavBar({navBarLinks}) {
    return (
        <nav className="navBar">
            <span className="navBar__logo"> Travel1</span>
            <ul className="navBar__list">
            {navBarLinks.map((item)=>{
                return(
                    <li className="navBar__item" key={item.title}>
                        <a className="navBar__link" href={item.url}> {item.title}</a>
                    </li>
                )
            })}
            </ul>
      
        </nav>
    )
}

export default NavBar
