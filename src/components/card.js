import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Btn from './button';

// library.add(faCoffee);

const CardComponent = () => {
    return(
        <div className='card'>
            <span className='card-header'>
                <a href='/#'>
                    <FontAwesomeIcon icon={faStar} />
                </a>
            </span>
            <div className='card-body'>
                <h1>How did we do</h1>
                <p>please let me know how you thinks this card component style feels,
                    All feedback os appreciated to help me develope my react js journey!
                </p>
                
                <div>
                    <p>1</p>
                </div>
                <Btn />
            </div>
        </div>
    )
}

export default CardComponent; 