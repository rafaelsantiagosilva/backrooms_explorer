import { useNavigate , useParams } from "react-router-dom";

export default function Jumpscare() {
  const navigate = useNavigate();
  const {number} = useParams();

  const FIVE_SECONDS = 5000;

  setTimeout(() => {
    navigate("/rooms/died/" + number);
  }, 5000);

  return (
    <figure className=" flex mt-52 justify-center items-center scale-[400%]">
      <img className="w-fit" src="/assets/monsters/stalker.png" alt="" />
    </figure>
  );
}