
import { useState } from "react"

import logoSvg from "./assets/logo.svg"
import plusIco from "./assets/plusIco.svg"


import { EmptyTask } from "./componets/EmptyTask"
import { NewTask } from "./componets/NewTask"



function App() {
  const [havetask, setHavetask]= useState(false)

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-600 ">
      
      <div className="flex justify-center items-center w-full h-[200px] bg-gray-700">
        <img src={logoSvg} alt="Logo do projeto" className="h-14"/>
      </div>
      
      <div className="flex-1">
        <form className="flex justify-center gap-4 w-[720px]">
          <input type="text" placeholder="Adicione uma nova tarefa" className="bg-gray-500 text-gray-300 p-3 rounded-lg w-2xl"/>
            
          <button type="submit" className="flex items-center py-3 px-5  gap-2 bg-blue-dark text-gray-100 rounded-lg">
            Criar
            <img src={plusIco} />
          </button>
        </form>

        <div className="flex justify-between mt-20 w-[720px]">
          <div className="flex gap-2">
            <span className="text-blue">Tarefas criadas</span>
            <span className="text-gray-200 bg-gray-400 px-3 rounded-full">5</span>
          </div>
          <div className="flex gap-2">
            <span className="text-purple">Concluídas</span>
            <span className="text-gray-200 bg-gray-400 px-3 rounded-full">2 de 5</span>
          </div>
        </div> 


        {
          havetask ? <NewTask/> : <EmptyTask/>
        }
        
      </div>
    </div>
  )
}

export default App
