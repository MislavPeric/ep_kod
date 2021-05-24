import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/api/tasks/get_all/")
      .then((res) => res.json())
      .then(res => setTasks(res))
  }, [update]);

  const handleChange = (i) => {
    fetch("/api/tasks/change_selected/", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        i,
      }),
    });

    setUpdate(!update);
  };

  const insertInto = () => {
    fetch("/api/tasks/insert/", {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });

    setUpdate(!update);
  };

  const checkAll = () => {
    fetch("/api/tasks/check_all/");

    setUpdate(!update);
  };

  const deleteSelected = (i) => {
    fetch("/api/tasks/delete_selected/", {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        i,
      }),
    });

    setUpdate(!update);
  };

  if (tasks.length === 0) {
    return null;
  } else {
    return (
      <div className="App">
        <p style={{ fontSize: 48, padding: 20 }}>Todo list</p>
        <header className="App-header">
          <div className="outerContainer">
            {tasks.map((x) => {
              return (
                <div className="taskContainer">
                  <label className="container">
                    <input
                      type="checkbox"
                      checked={x.completed}
                      onChange={() => handleChange(x.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <p className="deletable" onClick={() => deleteSelected(x.id)}>
                    {x.task_name}
                  </p>
                </div>
              );
            })}
          </div>
          <button onClick={checkAll}>Oznaći sve todo kao gotove</button> <br />
          <p style={{ fontSize: 24 }}>Unesi ime novog taska</p> <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <button onClick={insertInto}>Dodaj novi todo</button>
        </header>
      </div>
    );
  }
}

export default App;
