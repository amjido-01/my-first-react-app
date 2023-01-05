import React from 'react';
import myImg from './logo.svg'

class Classcomp extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        const title = this.props.title
        return(
            <div>
                <img src={ myImg } width="90px" alt='react logo' />
                <h1>Why i love react js</h1>
                <p>{title}</p>
            </div>
        )
    }
}

export default Classcomp;