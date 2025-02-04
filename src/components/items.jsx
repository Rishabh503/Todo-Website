import { useTodo } from "../context/todocontext";

export const Item = ({ curTodo }) => {
  const { deleteTodo, toggleComplete } = useTodo();

  return (
    <div
      className={` ${
        curTodo.completed ? "bg-green-600" : "bg-white"
      } p-2 rounded-lg flex border justify-between overflow-auto` }
    >
      <div className="flex justify-between  text-lg">
       
        <input
          className="h-5 w-5 mr-3"
          type="checkbox"
          checked={curTodo.completed}
          onChange={() => toggleComplete(curTodo.id)} // Update the state here
        />
        
        {curTodo.todo}
      </div>
      <div className="flex gap-2 ">
        <p>{curTodo.date}</p>
        <button
          onClick={() => deleteTodo(curTodo.id)} // Handle deletion
          className="bg-red-500 text-white px-3 py-1  rounded-lg mr-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
