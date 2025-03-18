import { useState } from "react"

import trashIco from "../assets/trash.svg"

export interface Props {
    Legenda: string
}

export function NewTask({Legenda}: Props) {
  const [isChecked, setIsChecked] = useState(false)

  return (
        <div className="flex items-start gap-3 mt-5 p-4 w-[720px] bg-gray-500 rounded-lg">
            <input 
            type="checkbox" 
            className=" appearance-none mt-1.5 w-4 h-4 cursor-pointer transition-all ring-2 ring-blue rounded-full checked:bg-purble-dark checked:ring-purble-dark"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked) }  
            />
            
            <span className={`text-gray-100 ${isChecked ? "line-through text-gray-300" : ""} `}>
                {Legenda}
            </span>
            
            <img src={trashIco} alt="Icone Delete" className=" w-7 h-7 cursor-pointer "/>
        </div>
    )
}