import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center ">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <div className="flex space-x-4">        <InputBox onChange={(e) => {
          setFirstName(e.target.value);
        }} placeholder="Akash" label={"First Name"} type={"text"}/>
        <InputBox onChange={(e) => {
          setLastName(e.target.value);
        }} placeholder="Ahmad" label={"Last Name"} type={"text"}/></div>


        <InputBox onChange={(e) => {
          setUsername(e.target.value);
        }} placeholder="Akash09" label={"Username"} type={"text"}/>
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} type={"password"}/>
        <div className="pt-4">
        <Button
  onClick={async () => {
    try {
      const response = await axios.post("http://localhost:4000/user/signup", {
        username: username,
        firstname: firstName,
        lastname: lastName,
        password: password
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      // Improved error handling
      if (error) {
        // Server responded with a status other than 200 range
        console.error('Error status:', error.status);
        console.error('Error data:', error.data); // Log the server's response
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request
        console.error('Error message:', error.message);
      }
    }
  }}
  label={"Sign up"}
/> 
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/user/signin"} />
      </div>
    </div>
  </div>
}