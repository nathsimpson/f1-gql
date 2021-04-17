const { teamsColors } = require("../utils");

// http://ergast.com/api/f1/current/last/results.json
const ResultsResolver = async (_source, { input = {} }, { dataSources }) => {
  const season = input.season || "current";
  const round = input.round || "last";
  const URL = `/f1/${season}/${round}/results.json`;
  const { MRData } = await dataSources.f1API.get(URL);

  // "limit": "30",
  // "offset": "0",
  // "total": "20",
  const race = MRData.RaceTable.Races[0];

  // return array when?
  const Results = {
    series: MRData.series,
    season: MRData.RaceTable.season,
    round: MRData.RaceTable.round,
    raceName: race.raceName,

    // Circuit
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
      driver: {
        id: c.Driver.driverId,
        code: c.Driver.code,
        firstName: c.Driver.givenName,
        lastName: c.Driver.familyName,
        dateOfBirth: c.Driver.dateOfBirth,
        nationality: c.Driver.nationality,
        driverUrl: c.Driver.url,
      },
      constructor: {
        name: c.Constructor.name,
        id: c.Constructor.constructorId,
        url: c.Constructor.url,
        color: teamsColors[c.Constructor.name],
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

  return Results;
};

module.exports = { ResultsResolver };
