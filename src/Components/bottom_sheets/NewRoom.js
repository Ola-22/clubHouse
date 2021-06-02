import { useState } from "react";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill } from "react-icons/bs";
import style from "../../style/roomDetail.module.css";

export default function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const card = props.cardDetail;

  return (
    <div>
      <AiOutlineFile />
      <BsMicMuteFill />
    </div>
  );
}
