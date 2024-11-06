import axios from "axios";
import { useEffect, useState } from "react";
import { Info } from "../components/Info";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setfilter] = useState("");
  const navigate =  useNavigate();

  useEffect(() => {
    try {
      const int = setTimeout( async ()=>{
        const response = await axios.get("http://localhost:4000/filter?filter=" + filter);
        console.log("a")
        setUsers(response.data.user); 
       }, 500 )
       return ()=>{
        clearTimeout(int)
       }
      } 
      catch (error) {
        console.error("Error fetching users:", error);
      }
},[filter])
  
  return (
    <div className="f">
        <input type="text" onChange={(e)=> {
            setfilter(e.target.value)
        }} placeholder="Filter by name" className="border rounded 3px" />
    <div >
      {users.map((u, index) => (
        <div key={index} className="p-4 border-b flex justify-between">
            <Info a={u.username} b={u.name} ></Info>
          <button className="border-2 border-green-700 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
          onClick={()=>{
navigate("/send"+ "?id="+u.id+"&username=" + u.username + "&name=" + u.name)
          }}>Send Money</button>
        </div>
      ))}
    </div></div>
  );
};
