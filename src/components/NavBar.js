import React, {useState} from 'react';
import "./NavBar.css";
import {FiMenu, FiX} from 'react-icons/fi';


function NavBar({navBarLinks}) {
    const [menuClicked, setMenuClicked]= useState(false);

    const toggleMenuClick = () =>{
        setMenuClicked(!menuClicked);
    }


    return (
        <nav className="navBar">
            <span className="navBar__logo"> Travel1</span>

            {menuClicked ? (
            <FiMenu size={25} className='navBar__menu' onClick = {toggleMenuClick}/>
            ):(
                <FiX size={25} className='navBar__menu' onClick = {toggleMenuClick}/>
            )}              
            <ul className={menuClicked? "navBar__list": "navBar__list navBar__list--active"}>
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
