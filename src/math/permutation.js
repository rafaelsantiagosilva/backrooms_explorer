import factorial from "./factorial.js";

export const countRepetitions = (array) => {
  const repetitions = [];
  const numbersAlreadyVisited = [];

  array.forEach(element => {
    if (numbersAlreadyVisited.includes(element))
      return;

    const ocurrencesOfThatElement = array.filter(item => item == element).length;
    numbersAlreadyVisited.push(element);
    repetitions.push(ocurrencesOfThatElement);
  });

  return repetitions;
}

export const permutation = (n) => {
  return factorial(n);
}

export const permutationWithRepetition = (n, elements) => {
  const repetitions = countRepetitions(elements);
  let denominator = 1;

  repetitions.forEach(repetition => {
    denominator *= factorial(repetition);
  });

  return permutation(n) / denominator;
}