# Backrooms Explorer 🚪

## O que é? ℹ️

**Backrooms Explorer** consiste em um jogo _endless runner_ onde o jogador explora o universo das [backrooms](https://pt.wikipedia.org/wiki/The_Backrooms) enquanto aplica conceitos matemáticos de analise combinatória!

## Tecnologias 🛠️

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Regras 📝

### Portas

As portas possuem probabilidades de levar para um combate ou para o apostador. Essas probabilidades ficam nas portas, juntamente com um ícone que representa o que seria o resultado de tal probabilidade: **garra** (combate) ou **carta** (apostador)

### Combate

Um valor, chamado de **valor de acerto**, deve ser calculado para o jogador decidir se deve ou não atacar o monstro. A fórmula é **permutação das habilidades da criatura** + **vida da criatura**:

$$
V = P(\text{habilidades do monstro}) + \text{vida do monstro}
$$

A partir desse valor:

- Se o jogador **Defender🛡️** e o valor for menor que o ataque da criatura, a **criatura ataca**
- Se o jogador **Atacar⚔️** e o valor for maior que a defesa da criatura, a **criatura ataca**
- Se o jogador **Atacar⚔️** e o valor for menor ou igual que a defesa da criatura, o **jogador ataca**

### Apostador

O **Apostador** irá fazer alguma pergunta envolvendo suas cartas. A partir dela, o jogador deve entender qual fórmula da Análise Combinatória utilizar (Permutação, Arranjo ou Combinação). Caso ele acerte a pergunta, ganha +10 segundos. Caso erre, nada ocorre.
