import ButtonPlayer from "./ButtonPlayer";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Player from "../../../classes/Player.js";
import { useNavigate, useParams } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

export default function PlayerStats({ monster, setMonster, aim, setAim }) {
  const [player, setPlayer] = useState(null);
  const { number } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const playerHp = Number(localStorage.getItem('playerHp'));
    const playerAtk = Number(localStorage.getItem('playerAtk'));
    const playerInStorage = new Player(playerHp, playerAtk);
    setPlayer(playerInStorage);
  }, []);

  useEffect(() => {
    if (player)
      localStorage.setItem('playerHp', player.hp);
  }, [player]);

  const receiveDamage = (damage) => {
    if (player.hp - damage <= 0)
      navigate(`/rooms/died/${number}`);

    setPlayer(prevPlayer => {
      const updatedPlayer = new Player(prevPlayer.hp - damage, prevPlayer.atk);
      localStorage.setItem('playerHp', updatedPlayer.hp);
      return updatedPlayer;
    });
  };

  const attack = () => {
    if (aim > monster.dt) {
      receiveDamage(monster.atk);
      return;
    }

    if (monster.hp - player.atk <= 0)
      navigate(`/rooms/doors/${(Number(number) + 1)}`);

    setMonster(prevMonster => {
      const updatedMonster = { ...prevMonster, hp: prevMonster.hp - player.atk };
      return updatedMonster;
    });
  };

  const defense = () => {
    if (aim < monster.atk) {
      receiveDamage(monster.atk);
      return;
    }

    setMonster(prevMonster => {
      const updatedMonster = { ...prevMonster, hp: prevMonster.hp };
      return updatedMonster;
    });
  }

  return (
    player && (
      <div className="bg-zinc-950 border border-zinc-600 rounded ml-6 text-zinc-200 font-jersey w-[40%] h-[90%] p-6">
        <h2 className="text-5xl font-bold flex items-center pb-1 gap-2">Vida<FaHeartbeat className="text-red-600" />: {player.hp}</h2>
        <hr />
        <menu className="flex gap-4 pt-4">
          <ButtonPlayer onClick={attack}>Bater</ButtonPlayer>
          <ButtonPlayer onClick={defense}>Defender</ButtonPlayer>
        </menu>
      </div>
    )
  );
}

PlayerStats.propTypes = {
  monster: PropTypes.object.isRequired,
  setMonster: PropTypes.func.isRequired,
  aim: PropTypes.number.isRequired,
  setAim: PropTypes.func.isRequired
};
