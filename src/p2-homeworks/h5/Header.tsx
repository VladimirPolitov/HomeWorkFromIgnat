import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./header.module.css";


function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.Pre_Junior} className={s.link}>pre-junior</NavLink>
            <NavLink to={PATH.Junior} className={s.link}>junior</NavLink>
            <NavLink to={PATH.Junior_plus} className={s.link}>junior+</NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header
