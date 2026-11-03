import {
  createMeteorField,
  createStarField,
  mulberry32,
  starFieldToShadow,
} from "./sky";

test("mulberry32 is deterministic and bounded", () => {
  const first = mulberry32(42);
  const second = mulberry32(42);

  for (let i = 0; i < 20; i += 1) {
    const value = first();
    expect(value).toBe(second());
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(1);
  }
});

test("star fields are stable for a seed", () => {
  expect(createStarField(25, 7)).toEqual(createStarField(25, 7));
});

test("different seeds produce different star fields", () => {
  expect(createStarField(25, 7)).not.toEqual(createStarField(25, 8));
});

test("star fields keep every star inside the documented bounds", () => {
  for (const star of createStarField(100, 3)) {
    expect(star.x).toBeGreaterThanOrEqual(1);
    expect(star.x).toBeLessThanOrEqual(2820);
    expect(star.y).toBeGreaterThanOrEqual(1);
    expect(star.y).toBeLessThanOrEqual(1235);
    expect(star.size).toBeGreaterThanOrEqual(1);
    expect(star.size).toBeLessThanOrEqual(10);
  }
});

test("star fields serialize into a box-shadow string", () => {
  const shadow = starFieldToShadow(createStarField(2, 1));

  expect(shadow.split(", ")).toHaveLength(2);
  expect(shadow).toMatch(/px .*px 1px/);
});

test("meteor fields are stable and respect the delay range", () => {
  const meteors = createMeteorField(15, 21);

  expect(meteors).toEqual(createMeteorField(15, 21));
  for (const meteor of meteors) {
    expect(meteor.delay).toBeGreaterThanOrEqual(3);
    expect(meteor.delay).toBeLessThan(18);
  }
});
