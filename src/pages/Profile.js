import { AiOutlineSetting } from "react-icons/ai";
import { BsAt, BsUpload } from "react-icons/bs";
import { Link } from "react-router-dom";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";

export default function Profile() {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.head} text-right mb-0`}>
            <Link to="/home">
              <img
                src="/images/arrow.png"
                alt=""
                className={exploreStyle.arrow_icon}
              />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img src="/images/user-img.jpg" alt="" className={style.profile_img} />
        <h4>Rafeh Qazi</h4>
        <p>@cleverqazi</p>
      </div>
    </>
  );
}
