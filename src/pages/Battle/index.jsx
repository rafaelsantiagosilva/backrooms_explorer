import Header from "../../components/Header";
import monsters from "../../data/bestiary.json"
import { useEffect, useState } from "react";
import MonsterDisplay from "./components/MonsterDisplay";
import PlayerStats from "./components/PlayerStats";
import getRandomSkills from "./utils/getRandomSkills.js";
import { permutation, permutationWithRepetition, countRepetitions } from "../../math/permutation.js";

export default function Battle() {
  const [monster, setMonster] = useState(null);
  const [monsterRandomSkills, setMonsterRandomSkills] = useState([]);
  const [aim, setAim] = useState(0);

  const getRandomMonsterExceptStalker = () => {
    const randomIndex = Math.floor(Math.random() * (monsters.length - 1));
    const treatedMonster = monsters[randomIndex];
    treatedMonster.hp = Number(treatedMonster.hp);
    treatedMonster.atk = Number(treatedMonster.atk);
    treatedMonster.dt = Number(treatedMonster.dt);
    setMonster(treatedMonster);
  }

  const getAim = () => {
    if (!monster || !monsterRandomSkills)
      return;

    let aimValue = 0;

    if (countRepetitions(monsterRandomSkills).length > 0)
      aimValue = permutationWithRepetition(monsterRandomSkills.length, countRepetitions(monsterRandomSkills));
    else
      aimValue = permutation(monsterRandomSkills.length);

    aimValue += monster.hp;
    setAim(aimValue);
  }

  useEffect(() => {
    getRandomMonsterExceptStalker();
  }, []);

  useEffect(() => {
    if (monster)
      setMonsterRandomSkills(getRandomSkills(monster));
  }, [monster]);

  useEffect(() => {
    if (monsterRandomSkills)
      getAim();
  }, [monster, monsterRandomSkills]);

  return (
    <>
      {monster ? (
        <>
          <Header>
            {monster.name}
          </Header>
          <MonsterDisplay monster={monster} monsterRandomSkills={monsterRandomSkills} setMonsterRandomSkills={setMonsterRandomSkills} />
          <PlayerStats monster={monster} setMonster={setMonster} aim={aim} setAim={setAim} />
        </>
      ) : <Header>Carregando...</Header>}
    </>
  );
}
