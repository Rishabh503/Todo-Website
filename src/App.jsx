import { useEffect, useState } from "react"
import { Form } from "./components/form"
import { TodoProvider } from "./context/todocontext"
import { Item } from "./components/items"



function App() {
  const[todos,setTodos]=useState([])
  const addTodo=(todo)=>{
      // console.log({"__pahuch gya")
      setTodos((prev)=>[...prev,todo])
      // console.log(todos)
  }

  const deleteTodo=(id)=>{
      setTodos((prev)=>
      prev.filter((todo)=>todo.id!==id)
    )
  }

  const toggleComplete=(id)=>{
      setTodos((prev)=>prev.map((lastTodo)=>lastTodo.id===id?{...lastTodo,completed:!lastTodo.completed}:lastTodo))
  }

  useEffect(()=>{
    const alltodos=JSON.parse(localStorage.getItem("todos"))
    if(alltodos && alltodos.length>0) {
      setTodos(alltodos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

//   useEffect(()=>{
//     const todos=JSON.parse(localStorage.getItem("todos"))

//     if(todos && todos.length>0){
//       setTodos(todos);
//     }
// },[]) 

// useEffect(()=>{
//   localStorage.setItem("todos",JSON.stringify(todos))
// },[todos])


  return (
    <TodoProvider className="bg-slate-700" value={{todos,addTodo,deleteTodo,toggleComplete}}>
    <div className="bg-slate-700 min-h-screen min-w-screen  ">
        <div className=" items-center flex flex-col p-36  w-full  justify-between gap-y-12">
              <div className=" flex flex-col ">
          <h1  className="text-3xl font-bold text-white-4000" >TODO MANAGER</h1>
              </div>
                <div className="items-start w-[32rem] h-2 ">
                                    <Form/>
                </div>
        </div>
          <div className="m-36  -mt-10 mb-10 ">
          {/* items  */}
          <div className="flex flex-col items-center gap-y-3">
                       {todos.map((todo)=>(
                        <div key={todo.id}
                        className='w-[36rem]'>
                          <Item curTodo={todo}/>
                          </div>
                       ))}
                    </div>
        </div>
        
        
    </div>
    </TodoProvider>
  )
}

export default App
