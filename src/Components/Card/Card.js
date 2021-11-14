import React from "react";
import "./Card.css";

export default function Card({ name, randomNum }) {
  return (
    <div key={randomNum[name]} className="name-div">
      <img
        className="avatar"
        src={
          "https://avatars.dicebear.com/api/micah/" +
          (randomNum[name] % 96) +
          ".svg?background=%23eeeeff"
        }
        alt=""
      />
      <p>{name}</p>
    </div>
  );
}
