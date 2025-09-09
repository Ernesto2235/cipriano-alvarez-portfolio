'use client'

import { logoutUser } from "../lib/login"
import { redirect } from "next/navigation";
import NavLink from "../components/NavLink"


async function logout(){
    await logoutUser();
    redirect("/login");
}

export default function DashboardPage() {

    return(
        <div className="flex flex-col items-center justify center h-full w-full gap-5">
            <nav className="w-full ">
                <ul className="flex flex-row gap-5 w-full justify-end text-3xl p-3 ">
                    <li><NavLink href="/dashboard/addProjects" text="Add Project"/></li>
                    <li><NavLink href="#" text="Edit Projects"/></li>
                    <li className="text-3xl hover:underline hover:font-semibold hover:cursor-pointer" onClick={()=>{
                        logout();
                    }}>Logout</li>
                </ul>
            </nav>
            <h1 className="text-6xl w-2/3 font-medium">Welcome to the dashboard </h1>
            <div>
                {/* Add your dashboard content here */ }
            </div>
        </div>
    )
}