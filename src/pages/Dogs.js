import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DogAction } from '../services/actions/DogAction';
const Dogs = () => {
    const { Dogs } = useSelector(state => state.AnimalReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(DogAction())
    }, []);
    return (
        <div className="Dogs">
            <ul>
                {Dogs.map((dog) => {
                    return (
                        <li key={dog.id}>{dog.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dogs
