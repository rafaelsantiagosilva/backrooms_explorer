import factorial from "./factorial.js";

export default function arrange(n, p) {
  return factorial(n) / factorial(n - p);
}