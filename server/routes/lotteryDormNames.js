const databaseToUiName = new Map([
  ["600 West 113", "600 W 113th"],
  ["Broadway", "Broadway Hall"],
  ["Carlton", "Carlton Arms"],
  ["Harmony", "Harmony Hall"],
  ["Hogan", "Hogan Hall"],
  ["McBain", "McBain Hall"],
  ["River", "River Hall"],
  ["Ruggles", "Ruggles Hall"],
  ["Schapiro", "Schapiro Hall"],
  ["Watt", "Watt Hall"],
  ["Woodbridge", "Woodbridge Hall"],
]);

const uiToDatabaseName = new Map(
  Array.from(databaseToUiName, ([databaseName, uiName]) => [
    uiName,
    databaseName,
  ])
);

const toUiDormName = (databaseName) =>
  databaseToUiName.get(databaseName) ?? databaseName;

const toDatabaseDormName = (uiName) =>
  uiToDatabaseName.get(uiName) ?? uiName;

module.exports = { toUiDormName, toDatabaseDormName };
