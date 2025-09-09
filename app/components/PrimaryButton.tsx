
interface PrimaryButtonProps{
    text:string
    onClick:(e:any | null)=>void
}

export default function PrimaryButton({text, onClick}:PrimaryButtonProps){
    return(
        <button onClick={onClick} className="text-xl font-semibold bg-primary hover:cursor-pointer p-3 rounded-xl text-primary-text hover:bg-primary-hover">{text}</button>
    )
}