import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Doors from "../Doors";
import GameHeader from "./components/GameHeader";
import Battle from "../Battle";
import Gambler from "../Gambler";
import YouDied from "../YouDied";
import convertSecondsInMinutes from "../../utils/convertSecondsInMinutes.js";
import Jumpscare from "../Jumpscare/index.jsx";

export default function Room() {
  const { type, number } = useParams();
  const [time, setTime] = useState(0);
  const [timeInMinutes, setTimeInMinutes] = useState({});
  const navigate = useNavigate();
  const ONE_SECOND = 1000;

  useEffect(() => {
    const newTime = Number(localStorage.getItem("time"));
    setTime(newTime);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1;

        if (newTime <= 0 && type != 'jumpscare' && type != 'died') {
          navigate("/rooms/jumpscare/" + number);
          return 0;
        }

        localStorage.setItem("time", newTime);
        return newTime;
      });
    }, ONE_SECOND);

    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    const convertedTime = convertSecondsInMinutes(time);
    setTimeInMinutes(convertedTime);
  }, [time]);

  const getRoom = () => {
    switch (type) {
      case 'doors':
        return <Doors />

      case 'battle':
        return <Battle />

      case 'gambler':
        return <Gambler setTime={setTime} />

      case 'jumpscare':
        return <Jumpscare />

      case 'died':
        return <YouDied />
    }
  }

  return (
    <>
      <GameHeader timeInMinutes={timeInMinutes} />
      {getRoom()}
    </>
  );
}