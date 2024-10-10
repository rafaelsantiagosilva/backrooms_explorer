import PropTypes from "prop-types";

export default function MonsterImage({ monster }) {
  return (
    <figure className="flex justify-center items-center">
      <img className="m-6 w-80 h-80 max-w-80 max-h-80" src={`/assets/monsters/${monster.image}`} alt={monster.name} draggable="false" />
    </figure>
  );
}

MonsterImage.propTypes = {
  monster: PropTypes.object.isRequired
};