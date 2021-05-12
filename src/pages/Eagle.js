import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EagleAction } from '../services/actions/EagleAction';

const Eagle = () => {
    const { Eagle } = useSelector(state => state.AnimalReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(EagleAction())
    }, []);
    return (
        <div className="Eagle">
            <ul>
                {Eagle.map((eagle) => {
                    return (
                        <li key={eagle.id}>{eagle.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Eagle
