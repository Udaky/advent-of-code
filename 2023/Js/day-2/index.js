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

const partOne = (file) => {
  const lines = fs.readFileSync(file, "utf-8").split("\r\n");
  return lines
    .map((line) => {
      return line
        .split(": ")[1]
        .split("; ")
        .map((set) => {
          const pulls = set.split(", ");
          return pulls.every((pull) => {
            const [count, color] = pull.split(" ");
            return maxCount[color] >= Number(count);
          });
        })
        .every((p) => p);
    })
    .reduce((s, result, i) => {
      return result ? s + (i + 1) : s;
    }, 0);
};

console.log(partOne("./example.txt"));
