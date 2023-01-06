import React from 'react';
import myImg from './logo.svg'
// import './App.css'

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
                <h1 className='heading'>Why i love react js</h1>
                <p>{title}</p>
            </div>
        )
    }
}

export default Classcomp;