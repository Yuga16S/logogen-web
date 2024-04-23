import '../index.css';
import { NavLink, NavLinkProps } from 'react-router-dom';
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
        <nav>
            <img src={ logo } alt="Logo"/>
            <NavLink style={ navLinkStyles } to='/'>Logo Lookup</NavLink>  
            <NavLink style={ navLinkStyles } to='/SubmitFeedback'>Submit Feedback</NavLink>
            <NavLink style={ navLinkStyles } to='/DocumentatioDetails'>Check Documentation</NavLink>
         </nav>
    )
}

export default Navbar;