export default function factorial(n) {
  let fat = 1;

  for (let i=1; i<=n; i++)
    fat *= i;

  return fat;
}