import React from 'react'
import Header from './Header'
import Routess from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Routess/>
            </HashRouter>
        </div>
    )
}

export default HW5
