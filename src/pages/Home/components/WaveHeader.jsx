import PropTypes from "prop-types";

export default function WaveHeader({ text }) {
  return (
    <header>
      <h1 className="wave font-jersey font-bold text-zinc-100 text-6xl text-center mt-8 ">
        {text.split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </header>
  );
}

WaveHeader.propTypes = {
  text: PropTypes.string.isRequired
};