import { useState } from "react";
import AddTask from "./component/AddTask";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      remainder: true,
    },
    {
      id: 2,
      title: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      remainder: true,
    },
    {
      id: 3,
      title: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      remainder: false,
    },
  ]);

  // Add new task
  const addTask = (title, day, remainder) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title,
        day,
        remainder,
      },
    ]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    alert("deleted");
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      )
    ); // map() is used to iterate over the array
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
