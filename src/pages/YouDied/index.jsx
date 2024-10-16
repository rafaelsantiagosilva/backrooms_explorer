import { useParams } from "react-router-dom";
import GoToHomeButton from "../../components/GoToHomeButton";
import { useEffect } from "react";

export default function YouDied() {
  const {number} = useParams();
  const audio = new Audio('/sounds/monsters/gnomage.mp3');

  useEffect(() => {
    audio.play();
    localStorage.setItem('time', 0);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="uppercase text-8xl font-jersey font-bold text-red-800 text-shadow-dead">Você morreu!</h1>
      <p className="text-5xl text-zinc-200 font-jersey">Pontuação: {number}</p>
      <GoToHomeButton />
    </div>
  );
}