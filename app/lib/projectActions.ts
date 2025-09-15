"use server"
export async function addProject(projectName: string, projectDescription: string, projectImage: File | null, projectUrl: string | null, projectDate: string| null) {
    
    const formData = new FormData();
    if(!projectName || !projectDescription || !projectImage || !projectUrl || !projectDate) {
        return{
            status: 400,
            message: "All fields are required."
        }
    }

    formData.append("name", projectName);
    formData.append("description", projectDescription);
    formData.append("image", projectImage);
    formData.append("url", projectUrl || "");
    formData.append("date", projectDate || "");
    formData.append("secret",process.env.APP_SECRET as string )
    

    console.log(formData)
    let response = await fetch(process.env.API_URL+"/projects/add", {
        method: "POST",
        body:formData
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        data.status = 200;
        return data;
    })
    .catch((error) => {
        console.log("Error:" + error);
        error.status = 500;
        return error;
    });
    
    return response;
}

export async function grabProject(Id:number){

}

export async function getAllProjects(){
    const projects = await fetch(process.env.API_URL+"/projects/"+process.env.APP_SECRET)
    .then(response => {
        return response.json()
    })
    
  
   
    return projects
}

export interface project{
    id:number
    name:string,
    description:string,
    img_url:string,
    project_url:string | null,
    date:string | null
}