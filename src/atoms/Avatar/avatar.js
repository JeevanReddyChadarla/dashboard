import React from "react";
import style from "./avatar.module.scss";
import { Avatar } from "antd";
import "antd/dist/antd.css";

function avatar(props) {
  const link = props.link;

  return (
    <div className={style["a-avatar"]}>
      <Avatar size={40} src={link} />
    </div>
  );
}

export default avatar;
