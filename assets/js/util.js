function floor(val) {
  return Math.floor(val);
}

function getDaysHoursMins(diff) {
  const days = diff / 1000 / 60 / 60 / 24.0;
  const hours = (days % 1) * 24;
  const minutes = (hours % 1) * 60;
  const seconds = (minutes % 1) * 60;
  return { days, hours, minutes, seconds };
}

export { floor, getDaysHoursMins };
