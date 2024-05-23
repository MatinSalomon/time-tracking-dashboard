
import React from 'react'
import './index.css'
import { useContext } from 'react';
import {DataContext} from '../../Context/index.jsx'


function Card({title, currentTime, previousTime}){
    const { 
        daily,
        weekly,
        monthly
    } = useContext(DataContext);

  
    return (
        <div className="full-card">
            <div className={`head ${title} `}>
            </div>
            <div 
            className="body">
                <div> 
                    <h3>
                        {title}
                    </h3>
                    <span 
                    className='ellipse'>
                    </span>
                </div>
                <div className='footer'>
                    <h2>{currentTime}hrs</h2>
                    <p>
                        { daily && 'Yesterday - ' + previousTime + 'hrs'}
                        { weekly && 'Last Week - ' + previousTime + 'hrs'}
                        { monthly && 'Last Month - ' + previousTime + 'hrs'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card