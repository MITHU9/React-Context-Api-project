/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  //console.log(todo);
  const { deleteTodo, updateTodo, toggleComplete } = useTodoContext();
  const [todoMsg, setTodoMsg] = useState(todo.title);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const handleEditBtn = () => {
    setIsTodoEditable(!isTodoEditable);
    if (!isTodoEditable) return;
    if (isTodoEditable) {
      updateTodo(todo.id, { ...todo, title: todoMsg });
    }
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleChecked = () => {
    toggleComplete(todo.id);
    //console.log(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-[#ccbed7] w-full
      ${todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
      <input
        onChange={handleChecked}
        type="checkbox"
        className="cursor-pointer"
        checked={todo.complete}
      />
      <input
        type="text"
        value={todoMsg}
        className={`outline-none w-full bg-transparent rounded-lg font-semibold text-center ${
          todo.complete ? "line-through" : ""
        } ${isTodoEditable ? "border border-white/20 py-1" : "border-none"}`}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={handleEditBtn}
        disabled={todo.complete}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        onClick={handleDelete}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      >
        ❌
      </button>
    </div>
  );
};
export default TodoItem;
