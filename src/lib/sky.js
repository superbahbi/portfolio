export function mulberry32(seed) {
  let state = seed >>> 0;
  return function next() {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const STAR_COLORS = ["#fffcfa", "#faf0e6", "#f5d0a9", "#fcf990"];

export function createStarField(amount, seed = 1) {
  const random = mulberry32(seed);
  const stars = [];

  for (let i = 0; i < amount; i += 1) {
    stars.push({
      x: Math.floor(random() * 2820 + 1),
      y: Math.floor(random() * 1235 + 1),
      size: Math.floor(random() * 10 + 1),
      color: STAR_COLORS[Math.floor(random() * STAR_COLORS.length)],
    });
  }

  return stars;
}

export function starFieldToShadow(stars) {
  return stars
    .map(
      (star) =>
        `${star.x}px ${star.y}px 1px .${star.size}px ${star.color}`,
    )
    .join(", ");
}

export function createMeteorField(amount, seed = 1) {
  const random = mulberry32(seed);
  const meteors = [];

  for (let i = 0; i < amount; i += 1) {
    meteors.push({
      delay: Math.floor((random() * 15 + 3) * 100) / 100,
      vertical: Math.floor(random() * 90 + 9),
      horizontal: Math.floor(random() * 250 + 50),
    });
  }

  return meteors;
}
