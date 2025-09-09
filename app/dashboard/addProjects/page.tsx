"use client";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import FormElement from "../../components/FormElement";
import { addProject } from "../../lib/projectActions";
import ErrorMessage from "../../components/ErrorMessage";
import NavLink from "@/app/components/NavLink";

export default function AddProjectsPage() {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectImage, setProjectImage] = useState(null);
    const [projectUrl, setProjectUrl] = useState("");
    const [projectDate, setProjectDate] = useState("");
    const [error, setError] = useState("");

    async function AddProjectEvent(){
    let response = await addProject(projectName, projectDescription, projectImage , projectUrl, projectDate)
        if(response.status === 200){
            console.log("Project added successfully:", response);
            // Optionally redirect or show a success message
        }
        else{
            console.error("Failed to add project:", response);
            setError("Failed to add project. Please check the input fields.");
        }

    }

    return (
        <div className="  h-full w-full ">
            <div className=" w-full ps-5 pt-5 self-start place-self-start justify-self-start">
                <NavLink href="/dashboard" text="←Back"/> 
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center gap-5">
                
                <h1 className="text-6xl w-1/3 font-medium">Add Projects</h1>
                <p className="font-light text-2xl w-1/3">This is the page where you can add new projects.</p>
                {/* Add your form or components for adding projects here */}
                {error && <ErrorMessage message={error} />} {/* Display error message if adding project fails */}
                <form className="form flex flex-col border border-foreground rounded-xl p-3 w-1/3 text-3xl font-normal gap-3">

                <FormElement label="Project Name" type="text" name="projectName" required placeholder="Project name" onChange={(e:any) =>{
                    setProjectName(e.target.value);
                }} />            
                <FormElement label="Project Description" type="textarea" name="projectDescription" required placeholder="Describe your project here..." onChange={(e:any)=>{
                    setProjectDescription(e.target.value);
                }} />
                <FormElement label="Project image" type="file" name="projectImage" required   onChange={(e:any)=>{
                    setProjectImage(e.target.files[0]);
                    console.log(e.target.files[0]);
                }} />
                <FormElement label="Project URL" type="text" name="projectUrl" placeholder="Enter the URL of the project" onChange={(e:any)=>{
                    setProjectUrl(e.target.value);
                }} />
                <FormElement label="Project Date" type="date" name="projectDate" placeholder="Enter the date of the project" onChange={(e:any)=>{
                    setProjectDate(e.target.value);
                }}/>
                



                    <PrimaryButton text="Add Project" onClick={(e:any) => {
                        e.preventDefault();
                        // Handle form submission logic here
                        AddProjectEvent();
                        console.log("attempted to add project");
                    }} />
                </form>
            </div>
        </div>
    );
}