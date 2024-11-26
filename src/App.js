import "./App.css";
import Form from "./component/Form";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import ListData from "./component/ListData";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element={<Form/>} />
        <Route path="/listData" element={<ListData/>} />
      </Routes>
    </div>
  );
}

export default App;
