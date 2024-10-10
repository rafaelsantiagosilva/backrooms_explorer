import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export default function GameHeader({timeInMinutes}) {
  const { number } = useParams();

  const addLeftZero = (n) => {
    if (String(n).length === 1) return "0" + n;
    return n;
  };

  return (
    <header className="flex justify-around text-zinc-100 font-bold pt-4 text-2xl">
      <span>Sala: {number}</span>
      <span>
        Tempo: {timeInMinutes.minutes}:{addLeftZero(timeInMinutes.seconds)}
      </span>
    </header>
  );
}

GameHeader.propTypes = {
  timeInMinutes: PropTypes.object.isRequired
}
