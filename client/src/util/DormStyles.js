export const APARTMENT_STYLE_DORMS = new Set([
  "47 Claremont",
  "47 Claremont Ave",
  "East Campus",
  "Hogan Hall",
  "Ruggles Hall",
  "Watt Hall",
  "Woodbridge Hall",
]);

export const CORRIDOR_STYLE_DORMS = new Set([
  "Broadway Hall",
  "Carman Hall",
  "Furnald Hall",
  "Harmony Hall",
  "John Jay Hall",
  "McBain Hall",
  "River Hall",
  "Schapiro Hall",
  "Wallach Hall",
  "Wien Hall",
]);

export const SUITE_STYLE_DORMS = new Set([
  "Carlton Arms",
  "Hartley Hall",
  "600 W 113th",
  "600 W 113",
]);

export const getDormStyleByName = (dormName, suiteValue) => {
  if (APARTMENT_STYLE_DORMS.has(dormName)) return "Apartment-Style";
  if (CORRIDOR_STYLE_DORMS.has(dormName)) return "Corridor-Style";
  if (SUITE_STYLE_DORMS.has(dormName)) return "Suite-Style";

  return Number(suiteValue) === 1 ? "Suite-Style" : "Corridor-Style";
};
