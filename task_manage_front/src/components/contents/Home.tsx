import type { NextPage } from "next";
import Home from "../../styles/Home.module.css";

const HomeContents: NextPage = () => {
  return (
    <div>
      <h1 className={Home.title}>My Profile</h1>
      <div className={`${Home.profile}`}>
        <div className={Home.image}>
          {/* <img alt="Profile Image"></img> */}
        </div>
        <div className={Home.info}>
          <div className={Home.name}>
            <input type="text" value="test"></input>
          </div>
          <div className={Home.job}>Web Developer</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tristique urna eu diam convallis, id congue massa commodo.
          </p>
        </div>
        <button>登録</button>
        <button>編集</button>
      </div>
    </div>
  );
};

export default HomeContents;
