import { useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";

export default function Jumpscare() {
  const navigate = useNavigate();
  const {number} = useParams();

  useEffect(() => {
    new Audio('/sounds/monsters/stalker.mp3').play();
  }, [])

  const FIVE_SECONDS = 5000;

  setTimeout(() => {
    navigate("/rooms/died/" + number);
  }, FIVE_SECONDS);

  return (
    <figure className=" flex mt-52 justify-center items-center scale-[400%]">
      <img className="w-fit" src="/assets/monsters/stalker.png" alt="" />
    </figure>
  );
}