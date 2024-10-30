import { useState } from "react"
import {Users} from "./Users"
import { Topbar } from "./Topbar"

export const Dashboard= ()=>{
const [balance,setbalance] = useState(0)

    return (
        <>
        <div>   
        <Topbar></Topbar>     
        <Users></Users>
        </div>

        </>
    )
}