import React from 'react';
import '../styles/main.scss'


const SectionA = (props) => {
    return ( 
        
        <div className='linkBox'>
            <button className='link' value={props.state} title={props.price} onClick={props.changeState}>{props.seat}</button>
        </div>
       
     );
}
 
export default SectionA;