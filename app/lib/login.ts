"use server"
import { createSession } from "./session";
import { deleteSession } from "./session";
export async  function  loginUser(username:string, password:string){

    let response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: username,
            password: password,
            secret: process.env.APP_SECRET,
        })
    })
    .then(response => response.json())
    .then ((data)=>{
        console.log(data)
        data.status = 200;
        return data
    })
    .catch((error) =>{console.log("Error:"+error)
        error.status = 500;
        return error
    })
    await createSession(response.userId);
    return response;
}

export async function logoutUser(){
    await deleteSession();
}