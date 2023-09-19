import React from "react";
import { RouteObject } from "react-router-dom"
import Discover from "@/pages/discover"
import Friend from "@/pages/friend"
import Mine from "@/pages/mine"


const router: RouteObject[] = [
    { path: "/", element: <Discover /> },
    { path: "/mine", element: <Mine /> },
    { path: "/friend", element: <Friend /> },

]

export default router