import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Timesheet from "./components/InvoiceTimesheet/Timesheet/Timesheet";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="timesheet" element={<Timesheet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
