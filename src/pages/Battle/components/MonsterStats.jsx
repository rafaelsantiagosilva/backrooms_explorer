import PropTypes from "prop-types";
import { FaHeart, FaStar } from "react-icons/fa";

export default function MonsterStats({ monster, monsterRandomSkills, setMonsterRandomSkills }) {
  return (
    <div className="bg-zinc-950 text-zinc-100 p-4 font-bold text-xl w-[25%] border border-r-8 border-b-8 border-gray-950 rounded-sm absolute bottom-1/2 left-[65%]">
      <table className="w-full">
        <tbody>
          <tr>
            <th className="text-start items-center gap-2 border p-2">HP<FaHeart className="inline-block mb-1 ml-1" /></th>
            <td className="text-start border p-2">{monster.hp}</td>
          </tr>
          <tr>
            <th className="text-start items-center gap-2 border p-2">SKILLS <FaStar className="inline-block mb-1" /></th>
            <td className="text-start border p-2">
              <ul>
                {monsterRandomSkills && monsterRandomSkills.map((skill, index) => (
                  <li className="pb-2" key={index}>{skill}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

MonsterStats.propTypes = {
  monster: PropTypes.object.isRequired,
  monsterRandomSkills: PropTypes.array.isRequired,
  setMonsterRandomSkills: PropTypes.func.isRequired
};