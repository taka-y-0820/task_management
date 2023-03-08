import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Home from "../components/contents/Home";

const TabMenu: NextPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Head>
        <title>Task Management App</title>
      </Head>

      <div className="tab-menu">
        <ul className="tab-menu-list">
          <li
            className={`tab-menu-item ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleClick(0)}
          >
            Home
          </li>
          <li
            className={`tab-menu-item ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            Schedule
          </li>
          <li
            className={`tab-menu-item ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleClick(2)}
          >
            Goal Setting
          </li>
          <li
            className={`tab-menu-item ${activeTab === 3 ? "active" : ""}`}
            onClick={() => handleClick(3)}
          >
            Memo
          </li>
        </ul>
        <div className="tab-menu-content">
          {activeTab === 0 && <Home></Home>}
          {activeTab === 1 && <div>Tab 2 Content</div>}
          {activeTab === 2 && <div>Tab 3 Content</div>}
          {activeTab === 3 && <div>Tab 4 Content</div>}
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
