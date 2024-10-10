import Header from "../../components/Header";
import GoToHomeButton from "../../components/GoToHomeButton";

export default function NotFound() {
  return (
    <>
    <GoToHomeButton />
      <Header>
        Entrou em uma porta bem estranha, não?
      </Header>
      <h2 className="text-3xl text-zinc-200 text-center font-bold mt-4">Se eu fosse você, saía daqui o mais rápido possível...</h2>
      <figure className="flex justify-center mt-6">
        <img className="w-64 flash" src="/assets/monsters/stalker.png" alt="Rosto de uma alma perdida" />
      </figure>
      <footer className="mt-6 text-lg text-center text-zinc-300">
        Erro 404: Conteúdo não encontrado :(
      </footer>
    </>
  );
}