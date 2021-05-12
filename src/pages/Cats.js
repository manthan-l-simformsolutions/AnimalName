import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { CatAction } from '../services/actions/CatAction';
const Cats = () => {
    const { Cats } = useSelector(state => state.AnimalReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CatAction())
    }, []);
    console.log(Cats)
    return (
        <div className="Cats">
            <ul>
                {Cats.map((cat) => {
                    return (
                        <li key={cat.id}>{cat.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cats;
