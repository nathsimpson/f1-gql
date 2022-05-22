const { constructorColors, getDriver } = require("../../utils");

const Results = async (_source, { input = {} }, { dataSources }) => {
  const season = input.season || "current";
  const round = input.round || "last";
  const URL = `/f1/${season}/${round}/results.json`;
  const { MRData } = await dataSources.f1API.get(URL);

  const race = MRData.RaceTable.Races[0];

  return {
    series: MRData.series,
    season: MRData.RaceTable.season,
    round: MRData.RaceTable.round,

    // Race
    raceName: race.raceName,
    circuit: {
      ...race.circuit,
      location: {
        ...(race.circuit ? race.circuit.Location : {}),
      },
    },
    date: race.date,
    time: race.time,
    results: race.Results.map((c) => ({
      number: c.number,
      position: c.position,
      points: c.points,
      driver: getDriver(c.Driver),
      constructor: {
        name: c.Constructor.name,
        id: c.Constructor.constructorId,
        url: c.Constructor.url,
        color: constructorColors[c.Constructor.name],
        nationality: c.Constructor.nationality,
      },
      grid: c.grid,
      laps: c.laps,
      status: c.status,
      timeMillis: c.Time ? c.Time.millis : null,
      timeString: c.Time ? c.Time.time : null,
      fastestLap: {
        ...c.FastestLap,
        time: c.FastestLap ? c.FastestLap.Time.time : null,
      },
    })),
  };
};

module.exports = { Results };
