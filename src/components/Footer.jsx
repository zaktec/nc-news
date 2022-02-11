import React from 'react'
import "../App.css";

const Footer = (props) =>  {
    return (
        <div className='Footer'>
        <p> Copyright {props.year}</p>
    </div>
    )
}
export default Footer;
