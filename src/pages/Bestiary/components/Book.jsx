import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import monsters from "../../../data/bestiary.json";
import Page from "./Page";
import ButtonBook from "./ButtonBook";
import Header from "../../../components/Header"

export default function Book() {
  const [actualIndex, setActualIndex] = useState(0);
  const [displayMonsters, setDisplayMonsters] = useState([]);

  const initDisplayMonsters = () => {
    const newDisplayMonsters = [];

    for (let i = 0; i < monsters.length; i += 2) {
      const monsterPair = [];

      monsterPair.push(monsters[i]);

      if (monsters[i + 1])
        monsterPair.push(monsters[i + 1]);

      newDisplayMonsters.push(monsterPair);
    }

    setDisplayMonsters(newDisplayMonsters);
    console.table(displayMonsters);
  };

  useEffect(() => {
    initDisplayMonsters();
  }, []);

  const changeToNextMonsters = () => {
    if (actualIndex < displayMonsters.length - 1)
      setActualIndex(actualIndex + 1);
  };

  const changeToPreviousMonsters = () => {
    if (actualIndex > 0)
      setActualIndex(actualIndex - 1);
  };

  if (displayMonsters.length === 0)
    return <Header>Loading...</Header>;

  return (
    <div className="flex flex-col justify-center items-center font-rosarivo">
      <main
        className={`w-[60%] h-96 bg-orange-900 mt-8 flex justify-${displayMonsters[actualIndex].length > 1 ? "around" : "start"} ${displayMonsters[actualIndex].length === 1 ? 'pl-10' : ''} items-center rounded-md border border-orange-950 border-r-8 border-b-8`}
      >
        {displayMonsters[actualIndex].map((monster) => (
          <Page key={monster.name} monster={monster} />
        ))}
      </main>
      <div className="flex justify-between w-[60%] mt-6">
        <ButtonBook onClick={changeToPreviousMonsters}>
          <FaArrowAltCircleLeft />
        </ButtonBook>
        <ButtonBook onClick={changeToNextMonsters}>
          <FaArrowAltCircleRight />
        </ButtonBook>
      </div>
    </div>
  );
}