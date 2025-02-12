import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import NoButton from "./components/NoButton";
import Character_agne from "./components/Character_Agne";
import Button from "react-bootstrap/Button";
import Character_martin from "./components/Character_Martin";

function App() {
  const [phaseCount, setPhaseCount] = useState(0);
  const [agneMood, setAgneMood] = useState<string | null>(null);
  const [martinMood, setMartinMood] = useState<string | null>(null);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const romanticAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioPlayed) {
      const audio = new Audio("assets/romantic-noises-made-with-Voicemod.mp3");
      romanticAudioRef.current = audio;
      audio.play();
    }
  }, [audioPlayed]);

  const handleUserInteractionOn = () => {
    // Stop the romantic audio when user interacts
    if (romanticAudioRef.current) {
      romanticAudioRef.current.pause();
      romanticAudioRef.current.currentTime = 0; // Reset the time to 0
    }
    setAudioPlayed(true);
  };

  const handleUserInteractionOff = () => {
    setAudioPlayed(false);
    romanticAudioRef?.current?.pause();
  };

  let content;

  if (phaseCount === 0) {
    content = (
      <div style={{ backgroundColor: "pink", borderRadius: "10%", padding: 50 }}>
        <div style={{ marginBottom: 20 }}>
          <Button
            variant="secondary"
            className="btn8"
            onClick={handleUserInteractionOn}
          >
            Click Here for Extra Spice!
          </Button>
        </div>
        <audio
          autoPlay
          src="assets/romantic-noises-made-with-Voicemod.mp3"
          style={{ display: "none" }}
        />
        <h1>Hey baby,</h1>
        <h2>will you be my Valentine? 💘</h2>
        <img
          src="https://media1.tenor.com/m/uDCZuQvYVagAAAAC/beef-beefbear.gif"
          alt="will-ya"
        />
        <div className="mb-2">
          <Button
            variant="primary"
            size="lg"
            className="btn1"
            onClick={() => {
              handleUserInteractionOff();
              setPhaseCount(1);
            }}
          >
            Yes!
          </Button>
          <NoButton />
        </div>
      </div>
    );
  } else if (phaseCount === 1) {
    content = (
      <div style={{ backgroundColor: "pink", borderRadius: "10%", padding: 50 }}>
        <audio
          autoPlay
          src="assets/last-friday-night-6-made-with-Voicemod.mp3"
          style={{ display: "none" }}
        />
        <img
          src="https://media.tenor.com/KM1VySAHeToAAAAi/cheriuzzina.gif"
          alt="chill"
        />
        <h2>Yay! Then it is time to choose your Valentine characters! 🥳</h2>
        <h3>Are you ready?</h3>
        <div className="mb-2">
          <Button
            variant="primary"
            size="lg"
            className="btn1"
            onClick={() => setPhaseCount(2)}
          >
            Yes!
          </Button>
        </div>
      </div>
    );
  } else if (phaseCount === 2) {
    content = (
      <div style={{ backgroundColor: "pink", borderRadius: "10%", padding: 50 }}>
        <h1>🤔</h1>
        <h2>Choose your Valentine character!</h2>
        <Character_agne onSelectMood={(mood) => setAgneMood(mood)} />
        <div className="next-phase">
          <Button
            variant="primary"
            size="lg"
            disabled={!agneMood}
            onClick={() => setPhaseCount(3)}
          >
            Next
          </Button>
        </div>
      </div>
    );
  } else if (phaseCount === 3) {
    content = (
      <div style={{ backgroundColor: "pink", borderRadius: "10%", padding: 50 }}>
        <h1>😍</h1>
        <h2>Choose your Valentine!</h2>
        <Character_martin onSelectMood={(mood) => setMartinMood(mood)} />
        <div className="next-phase">
          <Button
            variant="primary"
            size="lg"
            disabled={!martinMood}
            onClick={() => setPhaseCount(4)}
          >
            End
          </Button>
        </div>
      </div>
    );
  } else if (phaseCount === 4) {
    content = (
      <div style={{ backgroundColor: "pink", borderRadius: "10%", padding: 50 }}>
        <audio
          autoPlay
          src="assets/mr-brightside-pt.-1---the-killers-made-with-Voicemod.mp3"
          style={{ display: "none" }}
        />
        <h2>Here’s your final Valentine’s match! 💖</h2>
        <div
          className="character-match"
          style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        >
          <div className="character">
            <img
              src={`assets/${martinMood}_martin.jpg`}
              alt={`${martinMood}_martin`}
              style={{
                width: "240px",
                height: "320px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <p className="image-text">
              {`${martinMood ? martinMood.charAt(0).toUpperCase() + martinMood.slice(1) : "Unknown"} Martin`}
            </p>
          </div>
          <div className="character">
            <img
              src={`assets/${agneMood}_agne.jpg`}
              alt={`${agneMood}_agne`}
              style={{
                width: "240px",
                height: "320px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <p className="image-text">
              {`${agneMood ? agneMood.charAt(0).toUpperCase() + agneMood.slice(1) : "Unknown"} Agne`}
            </p>
          </div>
        </div>
        <h3>{getMatchDescription(martinMood, agneMood)}</h3>
        <div className="character">
          <p className="love" style={{ fontSize: "24px" }}>
            Love you :*
          </p>
        </div>
      </div>
    );
  }

  return <div className="valentine-container">{content}</div>;
}

// Function to generate funny descriptions
function getMatchDescription(martinMood: string | null, agneMood: string | null): string {
  const matchDescriptions: Record<string, string> = {
    "cute-freaky": "Cute Martin is blushing while Freaky Agne plans something *wild*. This is a rom-com waiting to happen. 🥰🔥",
    "cute-religious": "A saint and a cinnamon roll? Religious Agne is trying to pray, but Cute Martin just keeps looking adorable. ✝️🥺",
    "cute-hungry": "Cute Martin brings the charm, and Hungry Agne brings... the appetite. Let’s be real, this date is at an all-you-can-eat buffet. 🍔💖",
    "cute-crazy": "Chaos meets kindness. Cute Martin thinks Crazy Agne is ‘just passionate’—until she suggests skydiving for date night. 🎢💞",

    "cheeky-freaky": "Oh, this duo? Absolute *menace* energy. Cheeky Martin’s winks + Freaky Agne’s boldness? 🔥 Someone call security. 😉😏",
    "cheeky-religious": "Cheeky Martin cracks jokes, and Religious Agne keeps trying to ‘save’ him. Opposites attract... or do they? 😂🙏",
    "cheeky-hungry": "Cheeky Martin steals Hungry Agne’s fries—*big mistake*. He’ll pay for it in ways he can’t imagine. 🍟💀",
    "cheeky-crazy": "Cheeky Martin starts mischief, Crazy Agne *finishes* it. This is pure chaos and no regrets. 🤡🔥",

    "sexy-freaky": "Sexy Martin meets Freaky Agne? Oh, we’re in *danger*. Their chemistry is basically a rom-com with a PG-18 rating. 😘💥",
    "sexy-religious": "Sexy Martin tries to flirt, but Religious Agne just hands him a Bible. It's a *battle of purity vs temptation*. 😇😈",
    "sexy-hungry": "Sexy Martin is bringing the heat, but Hungry Agne is focused on the *real* priority—food. He has *competition*. 🍕🔥",
    "sexy-crazy": "Sexy Martin thought he was the bold one, but Crazy Agne *is built different*. This match is *pure fireworks*. 🎇💋",

    "sideEye-freaky": "Side-Eye Martin is judging Freaky Agne's chaotic energy. Meanwhile, she's planning their next adventure. A hilarious disaster. 🙄🔥",
    "sideEye-religious": "Side-Eye Martin just raised an eyebrow, and Religious Agne already thinks he needs to *repent*. Awkward. 😏🙏",
    "sideEye-hungry": "Side-Eye Martin watches in horror as Hungry Agne devours an entire pizza. He’s scared—but impressed. 🍕👀",
    "sideEye-crazy": "Side-Eye Martin tried to stay cool, but Crazy Agne just challenged him to a dance battle in public. He lost. 💃😂",
  };

  return matchDescriptions[`${martinMood}-${agneMood}`] || "A match made in... some kind of chaotic love lab! 💘";
}

export default App;
