import { useParams, Link } from "react-router-dom";
import { GiCardJoker, GiMonsterGrasp } from "react-icons/gi";
import { forwardRef, useEffect, useState } from "react";

const Door = forwardRef((props, ref) => {
  const [typeNextRoom, setTypeNextRoom] = useState('');
  const [iconName, setIconName] = useState('');
  const [isAnimation, setIsAnimation] = useState('door.png');

  const generateRandomIcon = () => {
    const probability = randomProbability();

    if (probability > 60) {
      setIconName('gambler');
      return <GiCardJoker />;
    }

    setIconName('battle');
    return <GiMonsterGrasp />;
  }

  const randomProbability = () => {
    return Math.floor(Math.random() * 100);
  }

  const randomTypeNextRoom = () => {
    const types = ['battle', 'gambler'];
    const randomIndex = Math.floor(Math.random() * types.length);

    return types[randomIndex];
  }
  
  const { number } = useParams();
  const [icon] = useState(() => generateRandomIcon());
  const [probability, setProbability] = useState(() => randomProbability());

  useEffect(() => {
    setProbability(randomProbability());
  }, []);

  const generateRandomNextRoom = () => {
    const number = randomProbability();

    if (number <= probability) {
      setTypeNextRoom('/' + iconName);
      return;
    }

    let randomTypeRoom = randomTypeNextRoom();

    while (randomTypeRoom === iconName)
      randomTypeRoom = randomTypeNextRoom();

    setTypeNextRoom('/' + randomTypeRoom);
  }

  const playDoorSound = () => {
    const audio = new Audio('/sounds/door-open.mp3');
    audio.play();
  }

  return (
    <div onMouseEnter={() => { playDoorSound(); setIsAnimation('door-animation.gif') }} onMouseLeave={() => setIsAnimation('door.png')}>
      <Link onMouseDown={generateRandomNextRoom} ref={ref} to={`/rooms${typeNextRoom}/${Number(number) + 1}`} draggable="false" className="group" data-prob={probability} data-icon={icon}>
        <img className="w-80" src={`/assets/${isAnimation}`} alt="Porta de madeira" draggable="false" />
        <div className="relative w-12 h-12 bottom-2/3 left-[8.8rem] flex flex-col justify-center items-center text-zinc-500 text-center group-hover:text-zinc-400">
          <span className="text-6xl">{icon}</span>
          <span className="text-lg invisible group-hover:visible">{probability}%</span>
        </div>
      </Link>
    </div>
  );
});

Door.displayName = 'Door';

export default Door;