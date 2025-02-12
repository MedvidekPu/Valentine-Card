import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const NoButton = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [buttonText, setButtonText] = useState("No..");

  const getRandomPosition = () => {
    const getRandomCoordinate = () => Math.random() * 150; // Adjust the range as needed
    const randomX = getRandomCoordinate();
    const randomY = getRandomCoordinate();
    const randomN = Math.random();
    const distanceX =
      randomN > 0.5
        ? Math.abs(randomX - buttonPosition.x)
        : Math.abs(randomX - buttonPosition.x);
    const distanceY =
      randomN < 0.5
        ? Math.abs(randomY - buttonPosition.y)
        : Math.abs(randomY - buttonPosition.y);
    const newX = distanceX >= 30 ? randomX : buttonPosition.x + 50;
    const newY = distanceY >= 30 ? randomY : buttonPosition.y + 50;
    return { x: newX, y: newY };
  };

  const handleHover = () => {
    const newPosition = getRandomPosition();
    setButtonPosition(newPosition);
  };

  const handleClickNo = () => {
    // Change the button text to "HAHA" when clicked
    handleHover();
    const randTextList = [
      "Nice try!",
      "Haha, try again..",
      "Isn't that tiring?",
      "Lol!",
    ];
    const randN = Math.floor(Math.random() * randTextList.length);
    const randText = randTextList[randN];
    setButtonText(randText);
  };
  const [yesClicked, setYesClicked] = useState(false);
  return (
    <Button
      variant="secondary"
      size="lg"
      className="btn2"
      style={{
        position: "relative",
        top: buttonPosition.y,
        left: buttonPosition.x,
      }}
      onMouseEnter={handleHover}
      onClick={handleClickNo}
    >
      {buttonText}
    </Button>
  );
};

export default NoButton;
