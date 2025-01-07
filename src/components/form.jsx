import { useState } from "react"
import { useTodo } from "../context/todocontext";

export const Form=()=>{
    const[todo,setTodo]=useState("");
    const[date,setDate]=useState("")

    const {addTodo}=useTodo()


    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(todo +"__todo gya")/
        if(!todo || todo==" "){
            alert("TODO CANT BE EMPTY")
            return
        } 
           
        if (!date) {
            alert("enter date")
            return
        }
        addTodo({todo,completed:false,id:Date.now(),date})
        setTodo("")
    }

    return (
        <form  onSubmit={handleSubmit} className="flex gap-2 ">
        <input className="bg-white w-full text-3xl" 
        type="text"
         value={todo} 
         onChange={(e)=>{setTodo(e.target.value)}}
         placeholder="add your todo here" />
        <input className="border-black h-14 bg-yellow-400 border-solid border-x-yellow-500 rounded-lg" 
        type="date" 
        value={date} 
        placeholder={Date.now()}
        onChange={(e)=>{setDate(e.target.value)}}/>
        <button className="bg-blue-400  px-4 rounded-lg">
            add
        </button>
      </form>
    )
}