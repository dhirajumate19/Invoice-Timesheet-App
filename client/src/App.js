import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Timesheet from "./components/InvoiceTimesheet/Timesheet/Timesheet";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import timesheetStyle from "./components/Footer/Footer.module.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="timesheet" element={<Timesheet />} />
        </Routes>
        <div className={timesheetStyle.footer}>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
