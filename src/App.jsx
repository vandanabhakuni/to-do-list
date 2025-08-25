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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-gray-800">TODO LIST</h1>

      {/* Input Section */}
      <div className="flex w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Add item..."
          className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          onClick={addItem}
          className="px-5 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {/* List Section */}
      <ul className="w-full max-w-md space-y-3">
        {list.map((item, index) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-white shadow p-3 rounded-lg"
          >
            <span className="text-gray-700">{item.value}</span>
            <div>
              <button
                onClick={() => deleteItem(item.id)}
                className="px-3 py-1 mr-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => editItem(index)}
                className="px-3 py-1 bg-yellow-400 text-gray-800 text-sm rounded hover:bg-yellow-500"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
