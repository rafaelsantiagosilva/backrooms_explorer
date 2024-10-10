import PropTypes from "prop-types";

export default function Button({ children }) {

  return (
    <button className="w-40 h-16 text-2xl font-bold bg-blue-800 text-zinc-100 border-b-8 border-blue-900 rounded hover:bg-blue-700 active:border-b-0">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired
};