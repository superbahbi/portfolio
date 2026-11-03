import technology from "./Technology";
import { resolveTechnologies, resolveTechnology } from "./technologies";

test("resolves a known technology by id", () => {
  const react = resolveTechnology("react");

  expect(react.name).toBe("React");
  expect(react.Icon).toBeDefined();
});

test("resolves a list of ids in order", () => {
  const resolved = resolveTechnologies(["react", "typescript", "expo"]);

  expect(resolved.map((item) => item.name)).toEqual([
    "React",
    "TypeScript",
    "Expo",
  ]);
});

test("throws on an unknown technology id", () => {
  expect(() => resolveTechnology("cobol")).toThrow(/Unknown technology/);
});

test("the tool list is built from the registry", () => {
  expect(technology.length).toBeGreaterThan(0);
  expect(technology.every((item) => item.name && item.Icon)).toBe(true);
});
