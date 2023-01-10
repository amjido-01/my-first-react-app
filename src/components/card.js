import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';


const Card = () => {
    return(
        <div className='card'>
            <span className='card-header'>
                <a href='/#'>
                    <FontAwesomeIcon icon={ faStar } />
                </a>
            </span>
            <div className='card-body'>
                <h1>please rate my first react component</h1>

                <p className='body-text'>please let me know how you thinks this card component style feels,
                    All feedback is appreciated to help me develope my react js journey!
                </p>
                
                <div className='values'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </div>
                <Button />
            </div>
        </div>
    )
}

export default Card; 