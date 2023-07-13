import React from 'react';
import './styles/main.scss'
import Ticket from './components/Ticket';
import {Routes, Route} from 'react-router-dom';



class App  extends React.Component {

    render() { 
       
        return (

           <div>
                <div>
                    <Routes>
                        <Route path='/' element={<Ticket/>}></Route>    
                    </Routes>  
                    
                </div>
           </div>
        );
    }
}   
 
export default App;