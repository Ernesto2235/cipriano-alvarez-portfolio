'use server'


import ProjectList from "./components/ProjectList";
import Modal from "./components/Model";
import { getAllProjects } from "./lib/projectActions";


export default async function Home() {

  const projects = await getAllProjects()

  
   



 


  

  return (
    <Modal>
      <ProjectList projects={projects.project}/>
    </Modal>
  );
}
