// App.jsx
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  // Add item
  const addItem = () => {
    if (userInput.trim() !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput,
      };
      setList([...list, newItem]);
      setUserInput("");
    }
  };

  // Delete item
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  // Edit item
  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedList = [...list];
      updatedList[index].value = editedTodo;
      setList(updatedList);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center p-6">
      {/* Card Container */}
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
          ✨ My Todo List
        </h1>

        {/* Input Section */}
        <div className="flex w-full mb-6">
          <input
            type="text"
            placeholder="What do you want to do today?"
            className="flex-grow p-3 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            onClick={addItem}
            className="px-6 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-r-xl hover:opacity-90 transition"
          >
            Add
          </button>
        </div>

        {/* List Section */}
        <ul className="space-y-4">
          {list.map((item, index) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-gray-50 border border-gray-200 shadow-md p-4 rounded-xl hover:scale-[1.02] transition-transform"
            >
              <span className="text-gray-800 font-medium">{item.value}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => deleteItem(item.id)}
                  className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => editItem(index)}
                  className="px-3 py-1 bg-yellow-400 text-gray-800 text-sm font-semibold rounded-lg hover:bg-yellow-500 transition"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {list.length === 0 && (
          <p className="text-center text-gray-500 mt-6 italic">
            No tasks yet... Start by adding one above! 🚀
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
