import PropTypes from "prop-types";

export default function ButtonBook({ onClick, children }) {
  return (
    <button onClick={onClick} className="flex items-center justify-center w-12 h-10 text-3xl text-white bg-zinc-700 border-b-4 border-zinc-800 rounded hover:bg-zinc-600 active:border-b-0">
      {children}
    </button>
  );
}

ButtonBook.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}