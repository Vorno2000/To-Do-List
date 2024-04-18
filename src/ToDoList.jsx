import { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([{ itemDesc: "test" }]);
  const [description, setDescription] = useState("");

  function handleAddItem() {
    if (description !== "") {
      const newItem = { itemDesc: description };

      setItems((i) => [...i, newItem]);
    }

    setDescription("");
  }

  function handleItemChange(event) {
    setDescription(event.target.value);
  }

  function handleDeleteItem(index) {
    setItems(items.filter((_, i) => index !== i));
  }

  function handleMoveUp(index) {
    if (index > 0) {
      const updatedItems = [...items];

      [updatedItems[index], updatedItems[index - 1]] = [
        updatedItems[index - 1],
        updatedItems[index],
      ];

      setItems(updatedItems);
    }
  }

  function handleMoveDown(index) {
    if (index !== items.length - 1) {
      const updatedItems = [...items];

      [updatedItems[index], updatedItems[index + 1]] = [
        updatedItems[index + 1],
        updatedItems[index],
      ];

      setItems(updatedItems);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List:</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="What to do..."
          value={description}
          onChange={handleItemChange}
        />
        <button className="add-button" onClick={handleAddItem}>
          Add:
        </button>
      </div>

      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.itemDesc}</span>
            <div>
              <button
                className="delete-button"
                onClick={() => handleDeleteItem(index)}
              >
                ❌
              </button>
              <button className="up-button" onClick={() => handleMoveUp(index)}>
                👆
              </button>
              <button
                className="down-button"
                onClick={() => handleMoveDown(index)}
              >
                👇
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
