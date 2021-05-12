import React from 'react'
import { NavLink } from 'react-router-dom'
const HeaderContent = () => {
    return (
        <div>
            <div className="link row">
                <NavLink to="/Cats">Cats</NavLink>
            </div>
            <div className="link row">
                <NavLink to="/Dogs">Dogs</NavLink>
            </div>
            <div className="link row">
                <NavLink to="/Eagle">Eagle</NavLink>
            </div>
            <div className="link row">
                <NavLink to="/Horse">Horse</NavLink>
            </div>

        </div>
    )
}

export default HeaderContent
