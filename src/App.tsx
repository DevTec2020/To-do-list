
import { useState } from "react"

import logoSvg from "./assets/logo.svg"
import plusIco from "./assets/plusIco.svg"


import { EmptyTask } from "./componets/EmptyTask"
import { NewTask } from "./componets/NewTask"



function App() {
  const [taskList, setTaskList]= useState<{text: string; checked: boolean}[]>([])
  const [textoImput, setTextoImput]= useState("")
  const completedTasks = taskList.filter((task) => task.checked).length
  


  function CreateNewTask(e: React.FormEvent){
    e.preventDefault()
    
    if (!textoImput.trim()) return;

    setTaskList((prev) => [...prev, {text: textoImput, checked: false}])

    setTextoImput("")
    
  }

  function toggleTask(index: number) {
    setTaskList((prev) => 
      prev.map((task, i) => (i === index ? {...task, checked: !task.checked} : task))
    );
  }

  function deleteTask(index: number){
    setTaskList((prev) =>
      prev.filter((_, i) => i !== index)
    )
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-600 ">
      
      <div className="flex justify-center items-center w-full h-[200px] bg-gray-700">
        <img src={logoSvg} alt="Logo do projeto" className="h-14"/>
      </div>
      
      <div className="flex-1">
        <form onSubmit={CreateNewTask} className="flex justify-center gap-4 w-[720px]">
          <input type="text" 
            placeholder="Adicione uma nova tarefa"
            value={textoImput} 
            className="bg-gray-500 text-gray-300 p-3 rounded-lg w-2xl"
            onChange={(e) => setTextoImput(e.target.value)}
          />
            
          <button type="submit" className="flex items-center py-3 px-5  gap-2 bg-blue-dark text-gray-100 rounded-lg cursor-pointer">
            Criar
            <img src={plusIco} />
          </button>
        </form>

        <div className="flex justify-between mt-20 w-[720px]">
          <div className="flex gap-2">
            <span className="text-blue">Tarefas criadas</span>
            <span className="text-gray-200 bg-gray-400 px-3 rounded-full">{taskList.length}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-purple">Concluídas</span>
            <span className="text-gray-200 bg-gray-400 px-3 rounded-full">
              {completedTasks} de {taskList.length}
            </span>
          </div>
        </div> 

        <div className="mt-5 space-y-3 max-h-[442px] overflow-y-scroll">
          {taskList.length > 0 ? (
            taskList.map((task, index) => (
              <NewTask 
                key={index} 
                Texto={task.text} 
                checked={task.checked} 
                onCheck={() => toggleTask(index)} 
                onDelete={() => deleteTask(index)}  
              /> 
            ))
          ) : (
            <EmptyTask/>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
