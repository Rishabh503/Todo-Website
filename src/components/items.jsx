import { useState } from "react"
import { useTodo } from "../context/todocontext"

export const Item=({curTodo})=>{
    console.log(curTodo.todo)
    // const [todoMsg,setTodoMsg]=useState(curTodo.todo)
    // console.log(todoMsg)
    const {deleteTodo,toggleComplete}=useTodo()
    const checker=curTodo.completed?"bg-green-300":"bg-white"

    return(
        <div className={`bg-white ${checker} p-1 rounded-lg flex border justify-between` }>
            <div className="text-3xl">
            <input className="h-5 w-5 mr-2" type="checkbox" checked={curTodo.completed} onChange={()=>{toggleComplete(curTodo.id)}}>
            </input>
            {curTodo.todo}
            </div>
            <div>
            <button onClick={()=>{deleteTodo(curTodo.id)}} className="bg-blue-400 ml-2 p-2">
                delete 
            </button>
            <button className="bg-blue-400 ml-2 p-2">
                edit
            </button>
            </div>
            
        </div>
    )
}