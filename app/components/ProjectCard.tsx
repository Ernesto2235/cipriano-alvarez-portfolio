import Link from "next/link"
import Image from "next/image"
import PrimaryButton from "./PrimaryButton"
import { useState } from "react"


interface ProjectCardProps{
    imgSrc :string,
    projectName: string,
    projectDate:string | null,
    projectLink:string | null,
    projectDescription: string,

}
interface ProjectCardModalProps{
    imgSrc :string,
    projectName: string,
    projectDate:string | null,
    projectLink:string | null,
    projectDescription: string,
    Open:boolean,
    
}




function ProjectCardModal({imgSrc,projectName,projectDate = "",projectLink,projectDescription,Open}:ProjectCardModalProps){
    if(!Open){
        return null
    }
    return(
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/60 flex flex-col items-center p-5 rounded-xl justify-center z-10">
            <div className="h-full w-1/2 flex flex-col items-center pt-5 bg-[#e9e3e1] rounded-xl  ps-3 pe-3">
                <Image className="w-full  rounded-lg shadow-md" width={500} height={500} src={"http://localhost:3001/images/"+imgSrc} alt={"Project: " + projectName}></Image>
                <h5 className="w-full text-3xl font-semibold">{projectName}</h5>
                <p className="w-full h-full text-xl shadow-md overflow-scroll p-1">{projectDescription}</p>
                <div className="flex flex-row w-full">
                    <div className="w-1/2 text-start text-lg">{projectDate}</div>
                    {projectLink !== null ?<Link className="w-1/2 text-lg text-end hover:underline justify-end flex hover:text-xl" href={projectLink} > Go to project →</Link>: null }
                </div>
                <div className="w-full m-2">
                    <PrimaryButton text="Close" onClick={()=>{
                
                    }}/>
                </div>
 
            </div>

        </div>
    )
}

export default function ProjectCard({imgSrc,projectName,projectDate = "",projectLink,projectDescription}:ProjectCardProps){
    const [openModal, setOpenModal] = useState(false);

    return(
        <li className="flex text-[#756056] bg-[#e9e3e1] shadow-sm p-3 h-2/3  w-1/4 rounded-md justify-center items-center flex-col hover:cursor-pointer" onClick={()=>{
            setOpenModal(!openModal)
        }}>
            <Image className="h-2/3 w-full shadow-sm rounded-md" width={400} height={400} src={"http://localhost:3001/images/"+imgSrc} alt={projectName}/>
            <div className="w-full">
                <p className="text-3xl">{projectName}</p>
                <div className="flex flex-row w-full items-end h-4/5  text-lg">
                    {projectLink !== null ?<Link className="w-1/2 text-start hover:underline flex hover:text-xl" href={projectLink} > Go to project →</Link>: null }
                    <p className="w-1/2 text-end">{projectDate}</p>
                </div>
            </div>
            <ProjectCardModal imgSrc={imgSrc} projectName={projectName} projectDate={projectDate} projectLink={projectLink} projectDescription={projectDescription} Open={openModal} />
        </li>
    )
}