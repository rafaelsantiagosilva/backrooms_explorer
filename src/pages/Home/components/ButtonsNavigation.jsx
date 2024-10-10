import { useEffect } from "react";
import Button from "./Button";

export default function ButtonsNavigation() {
  const buttonSound = new Audio('/sounds/button-hover.mp3');

  useEffect(() => {
    buttonSound.load();
  }, []);

  const playButtonSound = () => {
    console.log('> Playing audio');
    buttonSound.volume = 0.1;
    buttonSound.play();
  }

  const initPlayer = () => {
    playButtonSound();
    localStorage.setItem('playerHp', 100);
    localStorage.setItem('playerAtk', 15);
    localStorage.setItem('time', 120);
  }

  return (
    <nav className="flex flex-col gap-4 items-center text-xl mt-6">
      <a href="/rooms/doors/1" onMouseEnter={initPlayer}>
        <Button>Explorar</Button>
      </a>
      {/* <a href="/rules">
        <Button>Regras</Button>
      </a> */}
      <a href="/bestiary" onMouseEnter={playButtonSound}>
        <Button>Bestiário</Button>
      </a>
    </nav>
  );
}