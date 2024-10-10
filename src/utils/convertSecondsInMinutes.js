export default function convertSecondsInMinutes(seconds) {
  if (seconds <= 0)
    return { minutes: 0, seconds: 0 };

  const minutes = Math.floor(seconds / 60);
  const secondsExtra = seconds % 60;

  return { minutes, seconds: secondsExtra };
}