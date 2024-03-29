import React from 'react'

interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger' | 'success'; // ? is means this property is optional 
    // we have not mentioned type as string becoz, we are making sure that the users don't set some random value for color property in App.
    // we have mentioned 4 string literals and only these 4 can be mentioned for color in Apps, else there will be an error.
    onClick: () => void;
}
const Button = ({children, onClick, color='danger'}: Props) => {
    return (
        <div className = {"btn btn-" +color} onClick={onClick}>
            {children}
        </div>
    );
}

export default Button;
