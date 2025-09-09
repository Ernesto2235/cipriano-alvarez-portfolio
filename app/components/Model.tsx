'use client'

import { useState } from "react"
import PrimaryButton from "./PrimaryButton"
import Image from "next/image";


export default function Modal({children}:{children:React.ReactNode}){
  const [hideSection, setHideSection] = useState(true);
  const [hidden,setHidden] = useState('hidden');
  const [projects,setProjects] = useState([])

  function showProjects(){
    
    setHideSection(!hideSection)
    if(hideSection){
      setHidden("hidden")
    }else{
      setHidden("")
    }
    let view = document.querySelector("#projectSection")
    if(view !== null){
      view.scrollIntoView({behavior:"smooth"})
      console.log("click")
    }


  }


    return(
            <div className="h-full w-full">
                <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center">
                
                  <h1 className="text-8xl font-bold">Cipriano Alvarez</h1>
                  <PrimaryButton onClick={showProjects} text="CLICK ME!"   />
                </div>
                <div id="projectSection" className={"h-1/2 w-screen flex items-center ps-3 pe-3 pt-3 bg-[#C1B2AB] " } >
                  {children}
                </div>
            </div>
    )
}