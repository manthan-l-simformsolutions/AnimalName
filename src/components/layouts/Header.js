import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import Router from '../../routing/Router'
import HeaderContent from './HeaderContent';

const Header = ({ match }) => {
    return (
        <>
            <div className="row">
                <div className="leftnav col-md-3">
                    <HeaderContent />
                </div>
                <div className="col-md-9">
                    <Router match={match} />
                </div>
            </div>
        </>
    )
}

export default Header