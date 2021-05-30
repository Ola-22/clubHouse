import React from "react";
import DailyInfoCard from "../Components/DailyInfoCard";
import Header from "../Components/Header";
import style from "../style/home.module.css";

function Home() {
  return (
    <div>
      <Header />
      <div className={style.home_container}>
        <DailyInfoCard />
      </div>
    </div>
  );
}

export default Home;
