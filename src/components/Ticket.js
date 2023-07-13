import React, {useState, useEffect} from 'react';
import '../styles/main.scss';
import axios from 'axios';
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';
import SectionD from './SectionD';


const initCounterState = 0;
const initPriceState = 0;
const initChairsState = [];

const Ticket = () => {

    const[counter, setCounter] = useState(initCounterState);
    const[price, setPrice] = useState(initPriceState);
    const[chairs, setChairs] = useState(initChairsState)
    

    useEffect(() => {
        axios.get('chairs.json')
        .then((response) => setChairs(response.data))
    }, [])

    const changeState = (event) => {
        
        const value = event.target.value;
        if (value === 'unselected'){
            event.target.value = 'selected';
            event.target.style.background = 'green';
            setChairs([...chairs, {state:event.target.value}])
        }
        else if (value === 'selected'){
            event.target.value = 'tempReserv';
            event.target.style.background = 'yellow';
            setChairs([...chairs, {state:event.target.value}])   
        }
        else if (value === 'tempReserv'){
            event.target.value = 'reserv';
            event.target.style.background = 'red';
            setChairs([...chairs, {state:event.target.value}]);
            setCounter((prevCounter) => prevCounter +1);
            setPrice((prevPrice) => (prevPrice) += Number(event.target.title))
        }
        else if(value === 'reserv'){
            alert('قبلا رزرو شده') 
        }         
    } 

    
    return ( 
        <div className='mainBox'>
            <div className='topMenu'>Stage</div> 
            <div className='compputingBox'>
                <div className='countPriceBox'>Count : {counter}</div>
                <div className='countPriceBox'>Price : {price} $</div>
            </div> 

            <div className='allSection'>
                <div className='sectionB'>
                    {
                    chairs.map((chair) => (
                        chair.section === 'B' && <SectionB key={chair.number} seat={chair.number} state={chair.state} price={chair.price} changeState={changeState}/>
                    ))
                    }
                </div>
                <div className='sectionA'>
                    {
                    chairs.map((chair) => (
                        chair.section === 'A' && <SectionA key={chair.number} seat={chair.number} state={chair.state} price={chair.price} changeState={changeState}/>
                    ))
                    }
                </div>
                <div className='sectionC'>
                    {
                    chairs.map((chair) => (
                        chair.section === 'C' && <SectionC key={chair.number} seat={chair.number} state={chair.state} price={chair.price} changeState={changeState}/>
                    ))
                    }
                </div>
                <div className='sectionD'>
                    {
                    chairs.map((chair) => (
                        chair.section === 'D' && <SectionD key={chair.number} seat={chair.number} state={chair.state} price={chair.price} changeState={changeState}/>
                    ))
                    }
                </div>
            </div>
                    
        </div>
     );
}
 
export default Ticket;