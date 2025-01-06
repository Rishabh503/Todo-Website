import { useState } from "react"
import { useTodo } from "../context/todocontext";

export const Form=()=>{
    const[todo,setTodo]=useState("");

    const {addTodo}=useTodo()


    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(todo +"__todo gya")/
        if(!todo || todo==" ") return
        addTodo({todo,completed:false,id:Date.now()})
        setTodo("")
    }

    return (
        <form  onSubmit={handleSubmit} className="flex">
        <input className="bg-white w-full text-4xl" type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
        <button className="bg-blue-400 px-4 mx-5 rounded-lg">
            add
        </button>
      </form>
    )
}