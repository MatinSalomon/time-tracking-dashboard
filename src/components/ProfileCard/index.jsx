import React from 'react'
import { useContext } from "react"
import {DataContext} from '../../Context/index.jsx'
import './index.css'

function ProfileCard() {
    const { 
        setDaily,
        setWeekly,
        setMonthly
    } = useContext(DataContext);

    const updateDaily = () => {
        setDaily(true)
        setWeekly(false)
        setMonthly(false)
    }

    const updateWeekly = () => {
        setDaily(false)
        setWeekly(true)
        setMonthly(false)
    }

    const updateMonthly = () => {
        setDaily(false)
        setWeekly(false)
        setMonthly(true)
    }

    return (
        <div className="profile-card">
            <div className="profile">
                <span className="border-img">
                    <img src="https://i.imgur.com/UZCHs9v.png" />
                </span>
                <div className="name">
                    <p>Report for</p>
                    <h2> 
                        Jeremy 
                        <br /> 
                        Robson
                    </h2>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <p
                        onClick={() => updateDaily()}
                        >
                            daily
                        </p>
                    </li>
                    <li>
                        <p
                        onClick={() => updateWeekly()}
                        >
                            weekly
                        </p>
                    
                    </li>
                    <li>
                        <p
                        onClick={() => updateMonthly()}
                        >
                            monthly
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileCard