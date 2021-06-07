import { useState } from "react";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicFill, BsMicMuteFill } from "react-icons/bs";
import style from "../../style/roomDetail.module.css";

export default function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(true);
  const card = props.cardDetail;
  console.log("card", card);

  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className={"d-flex align-items-center"}>
            <a
              href="#"
              onClick={() => {
                props.setSheetVisible(false);
              }}
            >
              <img
                src="/images/arrow.png"
                alt=""
                className={style.arrow_icon}
              />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img
              src="/images/user-img.jpg"
              alt=""
              className={style.profile_img}
            />
          </div>
        </div>
        <div className={style.roomDetailCard}>
          <div
            className="d-flex align-items-center justify-content flex-wrap"
            style={{ padding: "0.5em 1em" }}
          >
            {card.members.map((item) => (
              <div className={style.memberContainer}>
                {micMuteVisible ? (
                  <div className={style.audio_icon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ""
                )}
                <img src="/images/user-img.jpg" alt="" />
                <p>
                  <span>*</span>
                  {item.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.footer}>
          <button
            onClick={() => {
              props.setSheetVisible(false);
            }}
          >
            <img src="/images/hand-peace.png" alt="" />
            Leave Quietly
          </button>
          <div>
            <button>
              <AiOutlinePlus />
            </button>
            <button>
              <img src="/images/stopHandIcon.png" alt="" />
            </button>
            <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
              {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
