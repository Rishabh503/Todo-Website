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
  const handleDeleteAll=()=>{
    setTodos([]);
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
  <TodoProvider
    className="bg-slate-700 min-h-screen"
    value={{ todos, addTodo, deleteTodo, toggleComplete }}
  >
    <div className="bg-slate-700 min-h-screen w-full flex flex-col items-center px-4">
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          TODO MANAGER
        </h1>
      </header>
      <div className="w-full sm:w-4/5 lg:w-2/3">
        <Form />
      </div>
      <main className="flex  flex-col items-center mt-12 w-full sm:w-4/5 lg:w-2/3">
        {todos.map((todo) => (
          <div key={todo.id} className="w-full ">
            <Item curTodo={todo} />
          </div>
        ))}
        <button
          onClick={handleDeleteAll}
          className="bg-red-500 text-white text-lg sm:text-xl px-6 py-2 rounded-xl mt-6"
        >
          Clear All
        </button>
      </main>
    </div>
  </TodoProvider>
);

}

export default App
