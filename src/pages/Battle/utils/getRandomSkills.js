function getRandomElementOfTheArray(array) {
  const randomNumber = Math.random() * array.length;
  const randomIndex = Math.floor(randomNumber);
  return array[randomIndex];
}

export default function getRandomSkills(monster) {
  const skills = [];

  for (let i = 0; i < 5; i++)
    skills.push(getRandomElementOfTheArray(monster.skills));

  return skills;
}
