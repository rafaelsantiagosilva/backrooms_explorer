import PropTypes from "prop-types";

export default function ButtonPlayer({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="w-40 py-2 text-4xl text-white bg-zinc-900 border-b-4 border-zinc-700 rounded hover:bg-zinc-800 active:border-b-0"
    >
      {children}
    </button>
  );
}

ButtonPlayer.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}