import trashIco from "../assets/trash.svg"

export interface Props {
    Texto: string
    checked: boolean
    onCheck: () => void
    onDelete: () => void
}

export function NewTask({Texto, checked, onCheck, onDelete}: Props) {


  return (
        <div className="flex items-start justify-between p-4 w-[720px] bg-gray-500 rounded-lg mr-2">
            <div className="flex flex1 gap-3">
                <input 
                type="checkbox" 
                className=" appearance-none mt-1.5 w-4 h-4 cursor-pointer transition-all ring-2 ring-blue rounded-full checked:bg-purble-dark checked:ring-purble-dark"
                checked={checked}
                onChange={onCheck}  
                />
                
                <span className={`text-gray-100 ${checked ? "line-through text-gray-300" : ""} `}>
                    {Texto}
                </span>
            </div>
            
            <img 
                src={trashIco} 
                alt="Icone Delete" 
                className=" w-7 h-7 cursor-pointer "
                onClick={onDelete} 
            />
        </div>
    )
}