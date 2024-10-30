import { Info } from "../components/Info"
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useSearchParams } from "react-router-dom"
import { useState } from "react";
import axios  from "axios" ;
import { useNavigate } from "react-router-dom";

export const Sendpage = () => {
const [searchParams] = useSearchParams();
const fullname = searchParams.get("name")
const username = searchParams.get("username")
const [amount , setamount] = useState(0)
const navigate = useNavigate()

    return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="flex flex-col justify-between p-10 bg-white rounded-lg shadow-lg">
    <Info a={username} b={fullname} />
    <InputBox label={"Amount (in Rupees)"} placeholder={"10000"} type={"number"} onChange={(e)=>{
        setamount(e.target.value)
    }}/>
    <div className="mt-4"></div>
    <Button label="Initiate Transfer" className="mt-4" 
    onClick={async ()=>{
        const response =await axios.post("http://localhost:4000/account/transfer",{
            sum : amount ,
            to : username
        },{
            headers:{
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        if (response.data.success) {
            alert ("Transaction Sucessfull " + response.data.message)
        }
        else {
            alert ("Transaction UnSucessfull  " + response.data.message)
        }
        navigate("/dashboard")
    }}/>
  </div>
</div>


    )
}