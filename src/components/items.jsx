import { useTodo } from "../context/todocontext";

export const Item = ({ curTodo }) => {
  const { deleteTodo, toggleComplete } = useTodo();

  return (
    <div
      className={`bg-white ${
        curTodo.completed ? "bg-green-600" : "bg-yellow-700"
      } p-2 rounded-lg flex border justify-between`}
    >
      <div className="flex items-center text-lg">
        <input
          className="h-5 w-5 mr-3"
          type="checkbox"
          checked={curTodo.completed}
          onChange={() => toggleComplete(curTodo.id)} // Update the state here
        />
        {curTodo.todo}
      </div>
      <div>
        <button
          onClick={() => deleteTodo(curTodo.id)} // Handle deletion
          className="bg-red-500 text-white px-3 py-1 rounded-lg mr-2"
        >
          Delete
        </button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">
          Edit
        </button>
      </div>
    </div>
  );
};
