import PropTypes from "prop-types";

export default function Header({ children }) {
  return (
    <header>
      <h1 className="font-jersey font-bold text-zinc-100 text-6xl text-center mt-8 ">{children}</h1>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};