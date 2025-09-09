'use client'
import { getAllProjects } from "../lib/projectActions"
import ProjectCard from "./ProjectCard";
import { project } from "../lib/projectActions"
import React from "react";


export default function ProjectList({projects}:any) {

    return (
        <ul className="h-full w-full flex">   
            {projects.map((project:project)=>{
               return( <ProjectCard key={project.id} projectName={project.name} projectDate={project.date}  projectDescription={project.description} projectLink={project.project_url} imgSrc={project.img_url}  />)
            })}

        </ul>
    )
}