import { useState, useContext } from "react"
import {DataContext} from '../../Context/index.jsx'
import Card from "../Card/index.jsx"
import ProfileCard  from '../ProfileCard/index.jsx'
import './index.css'

function Container(){
    const { 
        data,
        daily,
        weekly,
        monthly

    } = useContext(DataContext);
  
    return (
        <div className="container">
            <ProfileCard />

            { daily && 
                data?.map(item =>(
                <Card 
                title={item.title} 
                currentTime={item.timeframes.daily.current}
                previousTime={item.timeframes.daily.previous}
                />
            ))}

            { weekly && 
                data?.map(item =>(
                <Card 
                title={item.title} 
                currentTime={item.timeframes.weekly.current}
                previousTime={item.timeframes.weekly.previous}
                />
            ))}

            { monthly && 
                data?.map(item =>(
                <Card 
                title={item.title} 
                currentTime={item.timeframes.monthly.current}
                previousTime={item.timeframes.monthly.previous}
                />
            ))}

        </div>
    )
}

export default Container