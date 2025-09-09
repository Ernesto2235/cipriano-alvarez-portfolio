interface FormElementProps{
    label: string;
    type: string;
    name: string;
    required?: boolean;
    placeholder?: string;
    accept?: string;
    onChange?:(e:any| null)=>void;

}

export default function FormElement({ label, type, name, required = false, placeholder = "",accept="image/*",onChange }: FormElementProps) {
    return (
        <div className="flex flex-row gap-3 w-full">
            <label className="text-2xl w-1/3">{label}</label>
            {type === "textarea" ? (
                <textarea className="w-2/3 text-xl p-2 hover:border hover:rounded-md hover:border-foreground" name={name} required={required} placeholder={placeholder} onChange={onChange}></textarea>
            ) : (
                type === "file" ? (
                    <input className="w-2/3 text-xl p-2 hover:border hover:rounded-md hover:border-foreground" type={type} name={name} required={required} accept={accept} onChange={onChange} />
                ) :(<input className="w-2/3 text-xl p-2 hover:border hover:rounded-md hover:border-foreground" type={type} name={name} required={required} placeholder={placeholder} onChange={onChange} /> )
            )}
        </div>
    );
}