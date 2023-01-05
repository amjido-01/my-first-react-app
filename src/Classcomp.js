import React from 'react';
import myImg from './logo.svg'

class Classcomp extends React.Component {
    render() {
        return(
            <div>
                <img src={ myImg } width="90px" alt='react logo' />
                <h1>Why i love react js</h1>
            </div>
        )
    }
}

export default Classcomp;