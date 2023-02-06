import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import TaskBarBtn from "./components/TaskBarBtn";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      {showModal && <Modal setShowModal={setShowModal} />}
      <TaskBarBtn setShowModal={setShowModal} />
    </div>
  );
}

export default App;
