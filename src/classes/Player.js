export default class Player {
  #hp;
  #atk;

  constructor(hp, atk) {
    this.#hp = hp;
    this.#atk = atk;
  }

  info() {
    console.table({hp: this.#hp, atk: this.#atk});
  }

  get hp() {
    return this.#hp;
  }

  get atk() {
    return this.#atk;
  }

  set hp(hp) {
    this.#hp = Number(hp);
  }

  set atk(atk) {
    this.#atk = Number(atk);
  }
}
