import React from "react";
import "./todo.scss";

function Todo() {
  let [todo, todoSet] = React.useState([]);

  function handleTodo(event) {
    event.preventDefault();
    if (event.target[0].value !== "") {
      if (todo.length <= 5) {
        var newTodo = {
          id: +event.timeStamp.toFixed(0),
          value: event.target[0].value,
        };
        todoSet((prev) => [...prev, newTodo]);
        event.target[0].value = "";
      } else {
        alert("too many tasks");
        event.target[0].value = "";
      }
    }
  }
  function remove(id) {
    todoSet((todo) => todo.filter((task) => task.id !== id));
  }
  function done(e) {
    e.target.parentElement.parentElement.parentElement.firstElementChild.className =
      "done";
  }

  return (
    <div className="main">
      <form onSubmit={handleTodo}>
        <label htmlFor="add">Add Todo</label>
        <input type="text" placeholder="Add new todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todo.length ? (
          <>
            {todo.map((task) => (
              <li key={task.id}>
                <div className="item">
                  <h1>{task.value}</h1>
                </div>
                <div className="buttons">
                  <button className="done" onClick={done}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </button>
                  <button className="remove" onClick={() => remove(task.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </>
        ) : (
          <h1>Empty</h1>
        )}
      </ul>
    </div>
  );
}
export default Todo;
