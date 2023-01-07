import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag} from '@fortawesome/free-solid-svg-icons';


const Clock = ({time, color}) => {
    const styles = {
        clock: {
            border: "2px solid white",
            backgroundColor: "black",
            color: "white",
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            padding: "10px"
        },
        user: {
            textAlign: "right"
        }
    }
   return(
    <div className='clock' style={ styles.clock } >
        <>
        <FontAwesomeIcon icon={faHashtag} />

            <h1>
                { time }
            </h1>
            <p style={{ border: '1px solid white' }}>Saturday, January 07</p> 
            <p className="user" style={ styles.user }>@amjido_01</p>
        </>
    </div>
   )
}

export default Clock;