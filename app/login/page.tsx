"use client"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react";
import { loginUser } from "../lib/login";
import { redirect } from "next/navigation";
import ErrorMessage from "../components/ErrorMessage";

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin(){
        let response = await loginUser(username, password);
        console.log(response);
        if(response.status === 200){
            console.log(response.message);
            
            redirect("/dashboard"); // Redirect to home page after successful login
        }
        else{
            console.log("Login failed");
            setError("Login failed. Please check your username and password.");
        }
    }

    return(
        <div className="h-full w-full flex flex-col justify-center items-center gap-5">
            <h1 className="text-6xl  w-1/3">Login</h1>
            {error && <ErrorMessage message={error} />} {/* Display error message if login fails */}
            <form className="flex flex-col gap-5 w-1/3 justify-center border border-foreground rounded-xl p-3 ">
                <input onChange={(e:any)=>{
                    setUsername(e.target.value);
                }} className="text-3xl p-2 hover:border hover:rounded-md hover:border-foreground" type="text" placeholder="Username" />
                <input onChange={(e:any)=>{
                    setPassword(e.target.value);
                }} className="text-3xl p-2 hover:border hover:rounded-md hover:border-forground" type="password" placeholder="Password" />
                <PrimaryButton text="Login" onClick={(e:any ) => {
                    
                    e.preventDefault();
                    handleLogin();
                }} />
            </form>
        </div>
    )
}