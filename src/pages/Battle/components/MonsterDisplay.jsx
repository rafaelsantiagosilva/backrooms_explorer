import PropTypes from "prop-types";
import MonsterImage from "./MonsterImage";
import MonsterStats from "./MonsterStats";

export default function MonsterDisplay({ monster, monsterRandomSkills, setMonsterRandomSkills }) {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex justify-center gap-32 items-center w-full">
        <MonsterImage monster={monster} />
        <MonsterStats monster={monster} monsterRandomSkills={monsterRandomSkills} setMonsterRandomSkills={setMonsterRandomSkills} />
      </div>
    </section>
  );
}

MonsterDisplay.propTypes = {
  monster: PropTypes.object.isRequired,
  monsterRandomSkills: PropTypes.array.isRequired,
  setMonsterRandomSkills: PropTypes.func.isRequired
}