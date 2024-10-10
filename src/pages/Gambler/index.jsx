import { useState, useEffect } from "react";
import { countRepetitions, permutation, permutationWithRepetition } from "../../math/permutation.js";
import arrange from "../../math/arrange.js";
import combination from "../../math/combination.js";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export default function Gambler({ setTime }) {
  const [cards, setCards] = useState([]);
  const [cardsRevealed, setCardsRevealed] = useState([]);
  const [cardSuitGambler, setCardSuitGambler] = useState('');
  const [quantityOfEachSuit, setQuantityOfEachSuit] = useState({});
  const [answer, setAnswer] = useState(0);
  const [gamblerSpeech, setGamblerSpeech] = useState('');

  const [questions] = useState(
    ['De quantos modos possíveis posso ordenar isso aqui?',
      'Se eu quero selecionar 3 cartas entre as 5 que tenho, de quantas maneiras diferentes posso fazer isso?',
      "Se eu quero selecionar 3 cartas entre as 5 que tenho, de quantas maneiras diferentes posso organizar essas cartas?"
    ]
  );
  const [answersForQuestion, setAnswersForQuestion] = useState([]);
  const navigate = useNavigate();
  const { number } = useParams();

  const getRandomCard = () => {
    const cards = ['hearts', 'diamonds', 'spades', 'clubs'];
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  };

  const getRandomsCards = () => {
    const cards = [];
    for (let i = 0; i < 5; i++) cards.push(getRandomCard());
    return cards;
  };

  const countQuantityOfEachSuit = (cards) => {
    const quantityOfEachSuit = {};
    cards.forEach((card) => {
      quantityOfEachSuit[card] = (quantityOfEachSuit[card] || 0) + 1;
    });
    return quantityOfEachSuit;
  };

  const getRandomSuit = (cards) => {
    const suitsOnDesk = Array.from(new Set(cards));

    if (suitsOnDesk.length > 0) {
      const randomIndex = Math.floor(Math.random() * suitsOnDesk.length);
      return suitsOnDesk[randomIndex];
    }

    return null;
  };

  const translateSuitToPortuguese = (suit) => {
    switch (suit) {
      case 'hearts':
        return 'copas';
      case 'diamonds':
        return 'ouros';
      case 'spades':
        return 'espadas';
      case 'clubs':
        return 'paus';
      default:
        return '';
    }
  };

  const getInitialSpeech = () => {
    if (Object.keys(quantityOfEachSuit).length === 0) return "";
    if (!cards) return;

    let speech = "Fala meu nobre! Bora jogar um jogo? Tenho aqui comigo ";

    for (const [suit, quantity] of Object.entries(quantityOfEachSuit)) {
      speech += `${quantity} cartas de ${translateSuitToPortuguese(suit)}, `;
    }

    speech = speech.slice(0, -2) + '. ';

    const randomQuestionIndex = Math.floor(Math.random() * questions.length);

    switch (randomQuestionIndex) {
      case 0:
        if (countRepetitions(cards).length > 0) 
          setAnswersForQuestion(permutationWithRepetition(cards.length, cards)); // Passa o array de cartas
        else
          setAnswersForQuestion(permutation(cards.length));
        break;

      case 1:
        setAnswersForQuestion(combination(cards.length, 3));
        break;

      case 2:
        setAnswersForQuestion(arrange(cards.length, 3));
        break;

      default:
        break;
    }

    speech += questions[randomQuestionIndex];
    return speech;
  };

  const submitAnswer = () => {
    const FIVE_SECONDS = 5000;

    if (answer != answersForQuestion) {
      setGamblerSpeech('Tá errado meu consagrado, infelizmente. Mas tu é brasileiro,e brasileiro não desiste nunca, né não meu nobre? Isso é o ápice da gameplay.');
      setTimeout(() => {
        navigate('/rooms/doors/' + (Number(number) + 1));
      }, FIVE_SECONDS);
      return;
    }

    setGamblerSpeech('É isso aí meu nobre!!! Parabéns por essa gameplay MONSTRUOSA. Vou dar uma atrasada naquele cara pá tu, de nada! (+10sec)');
    setTime(prevTime => prevTime + 15);
    setTimeout(() => {
      navigate('/rooms/doors/' + (Number(number) + 1));
    }, FIVE_SECONDS);
  }

  useEffect(() => {
    const initialCards = getRandomsCards();
    setCards(initialCards);
    setCardsRevealed(new Array(5).fill(false));
    const suitCount = countQuantityOfEachSuit(initialCards);
    setQuantityOfEachSuit(suitCount);
    setCardSuitGambler(getRandomSuit(initialCards));
    const soundtrack = new Audio('/sounds/soundtrack/gambler.wav');
    soundtrack.loop = true;
    soundtrack.volume = 0.5;
    soundtrack.play();
  }, []);


  useEffect(() => {
    setGamblerSpeech(getInitialSpeech());
  }, [cards, quantityOfEachSuit]);

  return (
    <div className="relative">
      <img
        className="fixed top-0 left-1/2 transform -translate-y-1/3 -translate-x-1/2 scale-[30%]"
        src="/assets/monsters/gambler.png"
        alt="Gambler"
        draggable="false"
      />
      <div className="flex flex-col gap-1 fixed font-pixelify text-sm  left-[56dvw] top-[10dvh] z-10">
        <article className="bg-white w-[26dvw] h-[29dvh] border-black p-1 text-justify rounded-lg border-2 border-r-4 border-b-4">
          {gamblerSpeech}
        </article>
        <div className="flex gap-2">
          <input type="number" className="w-[7dvw] border-black bg-gray-800 text-white p-1 text-lg font-bolf border-2 border-r-4 border-b-4 rounded-lg" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <button onClick={submitAnswer} className="w-[10dvw] border-black bg-gray-800 text-white p-1 text-lg font-bolf border-2 border-r-4 border-b-4 rounded-lg hover:bg-gray-700 active:border-l-4 active:border-t-4 active:border-b-1 active:border-r-1">Responder</button>
        </div>
      </div>
      {console.info('Naipe do Apostador: ' + cardSuitGambler)}
      {console.table(quantityOfEachSuit)}
      <div className="flex gap-8 justify-center mt-[40vh]">
        {cards.map((card, index) => (
          <div
            className={`card ${!cardsRevealed[index] ? 'flipped' : ''}`}
            onClick={() => {
              const newCardsRevealed = [...cardsRevealed];
              newCardsRevealed[index] = !cardsRevealed[index];
              setCardsRevealed(newCardsRevealed);
            }}
            key={index}
          >
            <div className="card-inner">
              <figure className="card-front cursor-pointer">
                <img className="scale-125" src={`/assets/cards/${card}.png`} alt={card} draggable="false" />
              </figure>
              <figure className="card-back cursor-pointer">
                <img className="scale-125" src="/assets/cards/back.png" alt="back" draggable="false" />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Gambler.propTypes = {
  setTime: PropTypes.func.isRequired
}