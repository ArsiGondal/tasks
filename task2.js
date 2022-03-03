const players = [
  {
    playerID: "ZXC",
    playTime: 405,
    scored: 6,
  },
  {
    playerID: "XCV",
    playTime: 631,
    scored: 2,
  },
  {
    playerID: "CVB",
    playTime: 1077,
    scored: 1,
  },
  {
    playerID: "VBN",
    playTime: 650,
    scored: 0,
  },
  {
    playerID: "BNM",
    playTime: 900,
    scored: 10,
  },
];

const minimumPlayTimeWithHighestGoalScored = players
  .sort(function (a, b) {
    if (a.playTime === b.playTime) {
      return b.scored - a.scored;
    }
    return a.playTime > b.playTime ? 1 : -1;
  })
  .map((el) => {
    const container = {};
    container.playerID = el.playerID;
    container.playTime = el.playTime;
    container.scored = el.scored;
    return container;
  })[0];

console.log(minimumPlayTimeWithHighestGoalScored);
