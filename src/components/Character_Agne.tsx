import React, { useState } from "react";

function Character_agne({ onSelectMood }: { onSelectMood: (mood: string) => void }) {
  const [character, setCharacter] = useState("none");
  const handleSelection = (mood: string) => {
    setCharacter(mood);
    onSelectMood(mood);
  };
  let characterDescription;
  if (character === "religious") {
    characterDescription = (
      <div>
        <h3>You chose: Religious Agne ✝️🙏</h3>
        <p style={{ fontSize: "24px" }}>

          Holy water? Check. Bible in one hand, judgment in the other? Double check.  
          Religious Agne prays for your sins while side-eyeing you for even thinking about them.  
          She blesses the food, the drinks, and maybe even your questionable life choices.  
          Be careful—one wrong move, and she’s sending you straight to confession.
        </p>
      </div>
    );
  } else if (character === "freaky") {
    characterDescription = (
      <div>
        <h3>You chose: Let's Get Freaky Agne 😈🔥</h3>
        <p style={{ fontSize: "24px" }}>

          Oh, you *really* went there, huh? Freaky Agne is a menace—you never know  
          what she’ll say or do next. Her energy is dangerously playful, and let’s be honest,  
          you love every second of it. One raised eyebrow from her, and suddenly,  
          your knees are weak.  
        </p>
      </div>
    );
  } else if (character === "hungry") {
    characterDescription = (
      <div>
        <h3>You chose: Hungry Agne 🍕🍔</h3>
        <p style={{ fontSize: "24px" }}>
          WARNING: Do *not* stand between Hungry Agne and food. The hanger is real.  
          If you don’t feed her ASAP, she will start plotting your demise.  
          This girl doesn’t just want snacks—she *deserves* a full-course meal,  
          dessert, and an emotional support pizza.  
        </p>
      </div>
    );
  } else if (character === "crazy") {
    characterDescription = (
      <div>
        <h3>You chose: Crazy Agne 🤪💥</h3>
        <p style={{ fontSize: "24px" }}>
          Chaos. Absolute chaos. Crazy Agne is running on caffeine, adrenaline,  
          and pure nonsense. She’s the type to dare you to do something stupid  
          and then do it herself just to prove a point. If you hang with her,  
          expect a wild ride—and probably a few bad decisions along the way.  
        </p>
      </div>
    );
  }

  return (
    <div>
      <audio
        autoPlay
        src="assets/choose-character-made-with-Voicemod.mp3"
        style={{ display: "none" }}
      />
      <div className="moodButtonGrid">
        <div className="moodButton" onClick={() => handleSelection("religious")}>
          <img
            src="assets/religious_agne.jpg"
            alt="religious_agne"
            style={{
              width: "240px",
              height: "320px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <p className="image-text">Religious Agne ✝️🙏</p>
        </div>
        <div className="moodButton" onClick={() => handleSelection("freaky")}>
          <img
            src="assets/freaky_agne.jpg"
            alt="sexy_agne"
            style={{
              width: "240px",
              height: "320px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <p className="image-text">Feeling Freaky Agne 😈🔥</p>
        </div>
        <div className="moodButton" onClick={() => handleSelection("hungry")}>
          <img
            src="assets/hungry_agne.jpg"
            alt="hungry_agne"
            style={{
              width: "240px",
              height: "320px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <p className="image-text">Hungry Agne 🍕🍔</p>
        </div>
        <div className="moodButton" onClick={() => handleSelection("crazy")}>
          <img
            src="assets/crazy_agne.jpg"
            alt="crazy_agne"
            style={{
              width: "240px",
              height: "320px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <p className="image-text">Crazy Agne 🤪💥</p>
        </div>
      </div>
      <div className="characterDescription">{characterDescription}</div>
    </div>
  );
}

export default Character_agne;
