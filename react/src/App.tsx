import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import bunLogo from "./assets/bun.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    fetch("/note")
      .then((res: Response) => res.json() as Promise<string[]>)
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);
  
  return (
    <>
      <div>
        <a href="https://bun.sh" target="_blank">
          <img src={bunLogo} className="logo" alt="Bun logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bun + Vite + React</h1>
      <div className="card">
        <p>Today's tasks:</p>
        <ul>{tasks && tasks.map((task) => <li id={task}>{task}</li>)}</ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
