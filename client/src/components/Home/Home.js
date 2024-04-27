import React from "react";
import banner from "../../assets/home.png";
import { useNavigate } from "react-router-dom";
import homeStyel from "../Home/Home.module.css";
import { Button } from "@mui/material";
const Home = () => {
  const navigate = useNavigate();
  const onTimesheet = () => {
    navigate("/timesheet");
  };
  return (
    <div className={homeStyel}>
      <div className={homeStyel.content}>
        <h2>Company Portal where you submit your timesheet adn etc..</h2>
      </div>
      <section className={homeStyel.sectionConatiner}>
        <div className={homeStyel.sideView}>
          <div>
            <Button>Home</Button>
          </div>
          <div>
            <Button onClick={onTimesheet}>Timesheet</Button>
          </div>
          <div>
            <Button>Invoice</Button>
          </div>
          <div>
            <Button>Employees</Button>
          </div>
          <div>
            <Button>Settings</Button>
          </div>
        </div>
        <div className={homeStyel.imgContent}>
          <img src={banner} alt="banner"></img>
        </div>
      </section>
    </div>
  );
};
export default Home;
