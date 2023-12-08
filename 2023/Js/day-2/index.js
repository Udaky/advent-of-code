import fs from "fs";

const maxCount = {
  red: 12,
  green: 13,
  blue: 14,
};

// const partOne = (file) => {
//   const lines = fs.readFileSync(file, "utf-8").split("\r\n");
//   return lines
//     .map((line) => {
//       return line
//         .split(": ")[1]
//         .split("; ")
//         .map((set) => {
//           const pulls = set.split(", ");
//           return pulls.every((pull) => {
//             const [count, color] = pull.split(" ");
//             return maxCount[color] >= Number(count);
//           });
//         })
//         .every((p) => p);
//     })
//     .reduce((s, result, i) => {
//       return result ? s + (i + 1) : s;
//     }, 0);
// };

const partTwo = (file) => {
  const lines = fs.readFileSync(file, "utf-8").split("\r\n");
  return lines
    .map((line) => {
      const maxCount = {
        red: 0,
        green: 0,
        blue: 0,
      };
      line
        .split(": ")[1]
        .split("; ")
        .forEach((set) => {
          const pulls = set.split(", ");
          return pulls.forEach((pull) => {
            const [count, color] = pull.split(" ");
            if (maxCount[color] < Number(count)) {
              maxCount[color] = Number(count);
            }
          });
        });
      return maxCount.red * maxCount.green * maxCount.blue;
    })
    .reduce((s, v) => s + v);
};

console.log(partTwo("./input.txt"));
