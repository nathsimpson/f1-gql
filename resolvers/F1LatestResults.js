const { teamsColors } = require("../utils");

const F1LatestResultsResolver = async (_source, _, { dataSources }) => {
  const URL = "/f1/current/last/results.json";
  const { MRData } = await dataSources.f1API.get(URL);

  const F1SessionResults = {
    series: MRData.series,
    season: MRData.RaceTable.season,
    round: MRData.RaceTable.round,
    raceName: MRData.RaceTable.Races[0].raceName,
    locality: MRData.RaceTable.Races[0].Circuit.locality,
    country: MRData.RaceTable.Races[0].Circuit.context,
    date: MRData.RaceTable.Races[0].date,
    time: MRData.RaceTable.Races[0].time,
    results: MRData.RaceTable.Races[0].Results.map((c) => ({
      number: c.number,
      position: c.position,
      points: c.points,
      driverId: c.Driver.driverId,
      code: c.Driver.code,
      firstName: c.Driver.givenName,
      lastName: c.Driver.familyName,
      dateOfBirth: c.Driver.dateOfBirth,
      nationality: c.Driver.nationality,
      driverUrl: c.Driver.url,
      team: {
        name: c.Constructor.name,
        id: c.Constructor.constructorId,
        url: c.Constructor.url,
        color: teamsColors[c.Constructor.name],
        nationality: c.Constructor.nationality,
      },
      grid: c.grid,
      laps: c.laps,
      status: c.status,
      TimeMillis: c.Time ? c.Time.millis : null,
      timeString: c.Time ? c.Time.time : null,
      fastestLapTime: c.FastestLap ? c.FastestLap.Time.time : null,
      fastestLapIndex: c.FastestLap ? c.FastestLap.lap : null,
      fastestLapRank: c.FastestLap ? c.FastestLap.rank : null,
    })),
  };

  return F1SessionResults;
};

module.exports = { F1LatestResultsResolver };
