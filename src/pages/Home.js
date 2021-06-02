import React, { useState } from "react";
import DailyInfoCard from "../Components/DailyInfoCard";
import Header from "../Components/Header";
import RoomInfoCard from "../Components/RoomInfoCard";
import style from "../style/home.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import data from "../data/roomCard.json";
import ButtomSheet from "../Components/BottomSheet";
import newRoomData from "../data/newRoom.json";

function Home() {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisiblity, setLoaderVisiblity] = useState(false);
  const [cardId, setCardId] = useState(1);
  return (
    <>
      {loaderVisiblity ? (
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="/images/loader.gif" alt="" />
        </div>
      ) : (
        ""
      )}
      <Header />
      <div className={style.home_container}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={style.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="mr-2" />
          Start a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
      <ButtomSheet
        sheetTitle="start room"
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={data.find((item) => item.id == cardId)}
        setItemsVisible={(item) => setItemsVisible(item)}
        setSheetCreateRoom={(item) => {
          setLoaderVisiblity(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoaderVisiblity(false);
          }, 1000);
        }}
      />
      <ButtomSheet
        sheetTitle="new room"
        setSheetVisible={(item) => setSheetCreateRoom(item)}
        sheetVisible={sheetCreateRoom}
        cardDetail={newRoomData}
        setItemsVisible={(item) => setItemsVisible(item)}
      />
    </>
  );
}

export default Home;
