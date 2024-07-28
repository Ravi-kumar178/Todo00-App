import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import CreateTodo from "./Component/CreateToDo";
import UpdateTodo from "./Component/UpdateToDo";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/createTodo" element={<CreateTodo/>}/>
       <Route path="/updateTodo" element={<UpdateTodo/>}/>
    </Routes>
  );
}

export default App;
