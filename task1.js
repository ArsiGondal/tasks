const teams = [
  {
    teamName: "ABC",
    last5_5: "L",
    last5_4: "W",
    last5_3: "D",
    last5_2: "W",
    last5_1: "L",
  },
  {
    teamName: "BCD",
    last5_5: "L",
    last5_4: "L",
    last5_3: "D",
    last5_2: "D",
    last5_1: "W",
  },
  {
    teamName: "CDE",
    last5_5: "W",
    last5_4: "W",
    last5_3: "D",
    last5_2: "W",
    last5_1: "L",
  },
  {
    teamName: "DEF",
    last5_5: "L",
    last5_4: "L",
    last5_3: "L",
    last5_2: "L",
    last5_1: "L",
  },
  {
    teamName: "EFG",
    last5_5: "D",
    last5_4: "W",
    last5_3: "W",
    last5_2: "W",
    last5_1: "W",
  },
  {
    teamName: "FGH",
    last5_5: "L",
    last5_4: "W",
    last5_3: "L",
    last5_2: "D",
    last5_1: "W",
  },
  {
    teamName: "GHI",
    last5_5: "D",
    last5_4: "W",
    last5_3: "D",
    last5_2: "L",
    last5_1: "D",
  },
  {
    teamName: "HIJ",
    last5_5: "L",
    last5_4: "W",
    last5_3: "D",
    last5_2: "L",
    last5_1: "D",
  },
  {
    teamName: "IJK",
    last5_5: "W",
    last5_4: "L",
    last5_3: "W",
    last5_2: "W",
    last5_1: "W",
  },
  {
    teamName: "JKL",
    last5_5: "D",
    last5_4: "W",
    last5_3: "L",
    last5_2: "D",
    last5_1: "D",
  },
  {
    teamName: "KLM",
    last5_5: "D",
    last5_4: "D",
    last5_3: "L",
    last5_2: "L",
    last5_1: "W",
  },
  {
    teamName: "LMN",
    last5_5: "L",
    last5_4: "L",
    last5_3: "L",
    last5_2: "D",
    last5_1: "L",
  },
  {
    teamName: "MNO",
    last5_5: "L",
    last5_4: "D",
    last5_3: "D",
    last5_2: "W",
    last5_1: "D",
  },
  {
    teamName: "NOP",
    last5_5: "W",
    last5_4: "D",
    last5_3: "W",
    last5_2: "D",
    last5_1: "L",
  },
];
var position = 1;
const teamWins = teams.map((el) => {
  const container = {};
  var wins = 0;
  var losses = 0;
  var temp;
  temp = Object.values(el);
  temp.forEach((item) => {
    if (item == "W") {
      wins++;
    }
    if (item == "L") {
      losses++;
    }
  });
  container.teamName = el.teamName;
  container.wins = wins;
  container.losses = losses;
  return container;
});

const positionsAccordingToLast5Wins = teamWins
  .sort(function (a, b) {
    if (a.losses === b.losses) {
      return b.wins - a.wins;
    }
    return a.losses > b.losses ? 1 : -1;
  })
  .map((el) => {
    const container = {};
    container.position = position;
    container.teamName = el.teamName;
    position++;
    return container;
  });

console.log(positionsAccordingToLast5Wins);
