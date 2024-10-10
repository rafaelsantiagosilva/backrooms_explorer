import factorial from "./factorial.js";

export default function combination(n, p) {
  return factorial(n) / (factorial(p) * factorial(n - p));
}