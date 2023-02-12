const fs = require("fs");

fs.readFile("./input.txt", "utf8", (_, data) => {
  const steps = data.split("");

  let floor = 0;
  let firstTimeInBasement = 0;

  for (let i = 0; i < steps.length; i++) {
    if ("(" === steps[i]) {
      floor++;
    } else {
      floor--;
    }

    if (-1 === floor && 0 === firstTimeInBasement) {
      firstTimeInBasement = i + 1;
    }
  }

  console.log(floor);
  console.log(firstTimeInBasement);
});
