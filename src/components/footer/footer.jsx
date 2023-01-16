import React from 'react';
import { Badge } from 'react-bootstrap';
const Footer = (props) => {
    return (
        <div className='text-center mt-5'>
            <h6>{props.text} <Badge className='bg-dark'><a className= 'text-light text-decoration-none' href = 'https://saintseiya.fandom.com/es/wiki/Saint_Seiya_Wiki' target='_blank' rel="noopener noreferrer">Pinche aquí</a></Badge></h6>

        </div>
    );
};
export default Footer;