import Book from "./components/Book";
import GoToHomeButton from "../../components/GoToHomeButton";
import Header from "../../components/Header";

export default function Bestiary() {
  return (
    <>
      <GoToHomeButton />
      <Header>
        Bestiário
      </Header>
      <Book />
    </>
  );
}