import React from 'react'
import {Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import Junior_Plus from "./pages/Junior-Plus";
import Error404 from "./pages/Error404";

export const PATH = {
    Pre_Junior: '/pre-junior',
    Junior: '/junior',
    Junior_plus: '/junior-plus'
}

function Routess() {
    return (
        <div>
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={PATH.Pre_Junior} element={<PreJunior/>}/>
                <Route path={PATH.Junior} element={<Junior/>}/>
                <Route path={PATH.Junior_plus} element={<Junior_Plus/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Routess
