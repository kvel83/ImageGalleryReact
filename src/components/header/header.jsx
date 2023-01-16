import React from 'react';
import './header.css';
const Title = (props) => {
    return (
        <div className='container'>
            <img src={props.img} alt='simbolo caballeros dorados' className='img-fluid'/>
            <div className='text'>
                <h1 className='text-center text-light text-opacity-50 '>{props.title}</h1>
                <h3 className='text-center text-light text-opacity-50'>{props.subtitle}</h3>
            </div>
        </div>
    );
};
export default Title;