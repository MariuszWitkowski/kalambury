import React, { memo, useState, useEffect } from "react";
import { QuestionsContext } from "./context/questions";

const GameScene = memo(() => {
  const [color, setColor] = useState("yellow");
  const [color2, setColor2] = useState("yellow");
  const [color3, setColor3] = useState("yellow");

  useEffect(() => {
    const handleMotion = ({ rotationRate: { alpha, beta, gamma } }) => {
      if (alpha > 250 && color !== "red") {
        window.navigator.vibrate([200, 100, 200]);
        setColor("red");
      } else if (color !== "yellow") {
        setColor("yellow");
      }
      if (beta > 250 && color2 !== "red") {
        window.navigator.vibrate([200, 100, 200]);
        setColor2("red");
      } else if (color2 !== "yellow") {
        setColor2("yellow");
      }
      if (gamma > 250 && color3 !== "red") {
        window.navigator.vibrate([200, 100, 200]);
        setColor3("red");
      } else if (color3 !== "yellow") {
        setColor3("yellow");
      }
    };

    window.addEventListener("devicemotion", handleMotion, true);
    return () => {
      window.removeEventListener("devicemotion", handleMotion, true);
    };
  });

  return (
    <div>
      <div style={{ backgroundColor: color, width: 100, height: 100 }} />
      <div style={{ backgroundColor: color2, width: 100, height: 100 }} />
      <div style={{ backgroundColor: color3, width: 100, height: 100 }} />
    </div>
  );
});

export default GameScene;
