import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HorseAction } from '../services/actions/HorseAction';
const Horse = () => {
    const { Horse } = useSelector(state => state.AnimalReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(HorseAction())
    }, []);
    return (
        <div className="Horse">
            <ul>
                {Horse.map((horse) => {
                    return (
                        <li key={horse.id}>{horse.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Horse
