import React, { useState } from "react";

function Character_martin({ onSelectMood }: { onSelectMood: (mood: string) => void }) {
  const [character, setCharacter] = useState("none");

  const handleSelection = (mood: string) => {
    setCharacter(mood);
    onSelectMood(mood);
  };
  let characterDescription;
  if (character === "cute") {
    characterDescription = (
      <div>
        <h3>You chose: Cute Martin 🥺👉👈</h3>
        <p style={{ fontSize: "24px" }}>
          Awww, look at him! Cute Martin is all about innocent glances, shy smiles, 
          and soft cuddles. He’ll steal your hoodie and claim it's his now. 
          Expect random compliments, playful pouts, and lots of "I just think you're really cool" moments.  
        </p>
      </div>
    );
  } else if (character === "cheeky") {
    characterDescription = (
      <div>
        <h3>You chose: Cheeky Martin 😏🔥</h3>
        <p style={{ fontSize: "24px" }}>
          Oh, you like a little bit of trouble, huh? Cheeky Martin is always up to something—
          playful smirks, flirty winks, and just enough teasing to keep you on your toes. 
          He’ll pretend to steal your fries, but deep down, he just wants you to feed him.  
        </p>
      </div>
    );
  } else if (character === "sexy") {
    characterDescription = (
      <div>
        <h3>You chose: Sexy Martin 😘💋</h3>
        <p style={{ fontSize: "24px" }}>
          Confidence? Check. Charm? Overloaded. Sexy Martin knows exactly what he’s doing. 
          He walks in like he owns the place, gives you *that* look, and suddenly, 
          you forgot how to breathe. Warning: prolonged exposure may cause heart palpitations.
        </p>
      </div>
    );
  } else if (character === "sideeye") {
    characterDescription = (
      <div>
        <h3>You chose: Side Eye Martin 👀💅</h3>
        <p style={{ fontSize: "24px" }}>
          Oh, he’s judging. Side Eye Martin sees *everything*—from your questionable fashion choices 
          to that text you just sent. He sips his drink, raises an eyebrow, and lets you know without a word:  
          "Really? That’s what we’re doing today?"  
        </p>
      </div>
    );
  }

  return (
    <div>
      <audio
        autoPlay
        src="assets/eye-of-the-tiger-intro-made-with-Voicemod.mp3"
        style={{ display: "none" }}
      />
      <div className="moodButtonGrid">
        <div className="moodButton" onClick={() => handleSelection("cute")}>
          <img
            src="assets/cute_martin.jpg"
            alt="cute_martin"
            style={{
              width: "240px",
              height: "320px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <p className="image-text">Cute Martin 🥺👉👈</p>
        </div>
        <div className="moodButton" onClick={() => handleSelection("cheeky")}>
          <img
            src="assets/cheeky_martin.jpg"
            alt="cheeky_martin"
            style={{
              width: "240px",
              height: "320px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <p className="image-text">Cheeky Martin 😏🔥</p>
        </div>
        <div className="moodButton" onClick={() => handleSelection("sexy")}>
          <img
            src="assets/sexy_martin.jpg"
            alt="sexy_martin"
            style={{
              width: "240px",
              height: "320px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <p className="image-text">Sexy Martin 😘💋</p>
        </div>
        <div className="moodButton" onClick={() => handleSelection("sideEye")}>
          <img
            src="assets/sideeye_martin.jpg"
            alt="side_eye_martin"
            style={{
              width: "240px",
              height: "320px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <p className="image-text">Giving Side-Eye Martin 👀💅</p>
        </div>
      </div>
      <div className="characterDescription">{characterDescription}</div>
    </div>
  );
}

export default Character_martin;
