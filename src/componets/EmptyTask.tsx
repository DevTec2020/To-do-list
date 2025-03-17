import clipBoard from "../assets/clipBoard.svg"


export function EmptyTask() {
    return (
        <div className="flex flex-col justify-center items-center text-gray-300 text-xl mt-5 border-t-[1px] pt-20 border-gray-400">
            <img src={clipBoard} alt="" className="h-[56px]"/>
            <p className="font-bold mt-5">
            Você ainda não tem tarefas cadastradas
            </p>
            <p>
            Crie tarefas e organize seus itens a fazer
            </p>
      </div>
    )
}