import React from 'react';
import '../index.css';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { useState } from "react";
import logo from '../images/coverImage.png';

interface NavStyleProps {
    isActive: boolean;
}

export const Navbar = () => {
    const navLinkStyles = ({ isActive }: NavStyleProps) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }
    return (
        //below is for single page reference. 300 status code in n/w tab
        // <nav>
        //     <img src={ logo } alt="Logo"/>
        //     <NavLink style={ navLinkStyles } to='/LogoLookUpPage'>Logo Lookup</NavLink>  
        //     <NavLink style={ navLinkStyles } to='/SubmitFeedback'>Submit Feedback</NavLink>
        //     <NavLink style={ navLinkStyles } to='/DocumentatioDetails'>Check Documentation</NavLink>
        //     <NavLink style={ navLinkStyles } to='/AboutUs'>About</NavLink>
        //  </nav>
        <ul>
            <li>
                <img src={ logo } alt="Logo"/>
            </li>
            <li>
                <a href='/LogoLookUpPage' >Logo Lookup</a>
            </li>
            <li>
                <a href='/SubmitFeedback' >Submit Feedback</a>
            </li>
            <li>
                <a href='/DocumentatioDetails' >Check Documentation</a>
            </li>
            <li>
                <a href='/AboutUs' >About</a>
            </li>
        </ul>
    )
}

export default Navbar;