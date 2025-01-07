import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
            date:"",
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
})

export const useTodo=()=>{
    return useContext(TodoContext)
}
//ek provider

export const TodoProvider = TodoContext.Provider
