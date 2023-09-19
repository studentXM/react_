/* eslint-disable react/jsx-key */

import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import appStyles from "./App.scss"
import XmFooter from "@/components/app-footer";
import XmHeader from "@/components/app-header"
import Mine from "./pages/mine";
// import router from "@/router";
// function route_scructure(router_list: RouteObject[]) {
//     return router_list.map((route_item: RouteObject) => {
//         return <Route path={route_item.path} element={route_item.element} key={route_item.path}></Route>
//     })
// }
function App() {
    return <div className={appStyles.box}>
        <XmHeader></XmHeader>
        <BrowserRouter>
            <NavLink to="/mine">我的</NavLink>
            <NavLink to="/friend">社交</NavLink>
            <Routes>
                {/* {route_scructure(router)} */}
                <Route path="/mine" element={<Mine/>}></Route>
            </Routes>
        </BrowserRouter>
        <XmFooter></XmFooter>
    </div >
}
export default App