import PropTypes from "prop-types";

export default function Page({ monster }) {
  return (
    <section className="w-[25rem] h-[88%] bg-orange-100 rounded p-1">
      <h1 className="text-xl font-bold">{monster.name}</h1>
      <p className="text-justify text-sm">{monster.description}</p>
      <figure className="flex justify-center items-center">
        <img className="w-40 max-w-40" src={`/assets/monsters/${monster.image}`} alt={monster.name} />
      </figure>
    </section>

  )
}

Page.propTypes = {
  monster: PropTypes.object.isRequired
};