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
        <nav>
            <img src={ logo } alt="Logo"/>
            <NavLink style={ navLinkStyles } to='/LogoLookUpPage'>Logo Lookup</NavLink>
            <NavLink style={ navLinkStyles } to='/SubmitLogoDetailsPage'>Save Logo Details</NavLink>
        </nav>
    )
}

export default Navbar;