const { constructorColors, getDriver } = require("../../utils");

const QualifyingResults = async (_source, { input = {} }, { dataSources }) => {
  const season = input.season || "current";
  const round = input.round || "last";
  const URL = `/f1/${season}/${round}/qualifying.json`;
  const { MRData } = await dataSources.f1API.get(URL);

  const race = MRData.RaceTable.Races[0];

  return {
    series: MRData.series,
    season: MRData.RaceTable.season,
    round: MRData.RaceTable.round,

    // Quali
    raceName: race.raceName,
    circuit: {
      ...race.circuit,
      location: {
        ...(race.circuit ? race.circuit.Location : {}),
      },
    },
    date: race.date,
    time: race.time,
    results: race.QualifyingResults.map((c) => ({
      number: c.number,
      position: c.position,
      driver: getDriver(c.Driver),
      constructor: {
        name: c.Constructor.name,
        id: c.Constructor.constructorId,
        url: c.Constructor.url,
        color: constructorColors[c.Constructor.name],
        nationality: c.Constructor.nationality,
      },
      Q1: c.Q1,
      Q2: c.Q2,
      Q3: c.Q3,
    })),
  };
};

module.exports = { QualifyingResults };
