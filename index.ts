const fs = require("fs");

fs.readFile("./input.txt", "utf8", (_, data) => {
  const steps = data.split("");

  let floor = 0;

  for (let i = 0; i < steps.length; i++) {
    if ("(" === steps[i]) {
      floor++;
    } else {
      floor--;
    }
  }

  console.log(floor);
});
