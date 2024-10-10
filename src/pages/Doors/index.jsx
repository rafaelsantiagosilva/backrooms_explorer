import { useRef } from "react";
import Header from "../../components/Header";
import Door from "./components/Door";

export default function Doors() {
  const firstDoor = useRef();
  const secondDoor = useRef();
  const thirdDoor = useRef();

  return (
    <>
      <Header>
        Portas
      </Header>
      <main className="flex justify-around mt-6">
        <Door ref={firstDoor} />
        <Door ref={secondDoor} />
        <Door ref={thirdDoor} />
      </main>
    </>
  );
}