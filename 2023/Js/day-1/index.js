import fs from "fs";

const partOne = (file) => {
  const lines = fs.readFileSync(file, "utf-8").split("\r\n");
  console.log(lines);
  const values = lines.map((line) => {
    let first = line.split("").find((v) => !Number.isNaN(Number(v)));

    let last = line.split("").findLast((v) => !Number.isNaN(Number(v)));

    return Number(first + last);
  });

  return values.reduce((s, v) => s + v);
};

// console.log(partOne("./example.txt"));

const firstNumberWordsRegExp = new RegExp(
  ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].join(
    "|"
  )
);

const lastNumberWordsRegExp = new RegExp(
  ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    .join("|")
    .split("")
    .reverse()
    .join("")
);

const wordMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};
const partTwo = (file) => {
  const lines = fs.readFileSync(file, "utf-8").split("\r\n");

  const values = lines.map((line) => {
    let firstNumberIndex = line
      .split("")
      .findIndex((v) => !Number.isNaN(Number(v)));

    let firstWordMatch = line.match(firstNumberWordsRegExp);

    let firstWordNumberIndex = firstWordMatch?.index;

    let firstNumber =
      firstNumberIndex !== -1
        ? firstWordMatch
          ? firstNumberIndex < firstWordNumberIndex
            ? line[firstNumberIndex]
            : wordMap[firstWordMatch[0]]
          : line[firstNumberIndex]
        : wordMap[firstWordMatch[0]];

    let lastNumberIndex = line
      .split("")
      .findLastIndex((v) => !Number.isNaN(Number(v)));

    let lastWordMatch = line
      .split("")
      .reverse()
      .join("")
      .match(lastNumberWordsRegExp);

    let lastWordNumberIndex = lastWordMatch
      ? line.length - 1 - lastWordMatch.index
      : null;
    let lastNumber =
      lastNumberIndex !== -1
        ? lastWordMatch
          ? lastNumberIndex > lastWordNumberIndex
            ? line[lastNumberIndex]
            : wordMap[lastWordMatch[0].split("").reverse().join("")]
          : line[lastNumberIndex]
        : wordMap[lastWordMatch[0].split("").reverse().join("")];

    console.log(firstNumber, lastNumber);
    return Number(firstNumber + lastNumber);
  });

  return values.reduce((s, v) => s + v);
};

console.log(partTwo("./input.txt"));
