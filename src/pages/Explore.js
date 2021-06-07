import style from "../style/explore.module.css";
import data from "../data/Explore.json";
import { DownOutlined } from "@ant-design/icons";

function Explore() {
  const { people, conversation } = data;

  return (
    <div className={style.exploreContainer}>
      <h6>PEOPLE TO FOLLOW</h6>
      <div className={style.peopleContainer}>
        {people.map((item) => (
          <div>
            <div className="d-flex align-items-center">
              <img src="/images/user-img.jpg" alt="" />
              <div className="ml-2">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}
        <button className={style.showMore}>
          Show more people <DownOutlined />
        </button>
        <h2>DUMMY TEXT</h2>
      </div>
    </div>
  );
}

export default Explore;
