import fs from "fs";

const partOne = (file) => {
  const lines = fs.readFileSync(file, "utf-8").split("\r\n");
  console.log(lines);

  const input = lines.map((x) => x.replace(/  /g, " 0"));

  const res = input.reduce((acc, row) => {
    const [, cards] = row.split(": ");
    const [winners, myCards] = cards.split(" | ");

    const point = myCards
      .split(" ")
      .filter((card) => winners.includes(card)).length;

    const value = point === 0 ? 0 : Math.pow(2, point - 1);

    return acc + value;
  }, 0);

  console.log(res);
};

const partTwo = (file) => {
  const lines = fs.readFileSync(file, "utf-8").split("\r\n");
  console.log(lines);

  const input = lines.map((x) => x.replace(/  /g, " 0"));

  const cardCount = new Array(input.length).fill(1);

  input.forEach((row, index) => {
    const [, cards] = row.split(": ");
    const [winners, myCards] = cards.split(" | ");

    const point = myCards
      .split(" ")
      .filter((card) => winners.includes(card)).length;

    if (point) {
      for (let i = index + 1; i < index + 1 + point; i++) {
        if (cardCount[i]) cardCount[i] += cardCount[index] || 0;
      }
    }
  });

  console.log(cardCount.reduce((acc, v) => acc + v, 0));
};

partTwo("./input.txt");
