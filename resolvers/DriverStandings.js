const { teamsColors } = require("../utils");

const DriverStandingsResolver = async (
  _source,
  { input = {} },
  { dataSources }
) => {
  const season = input.season || "current";
  const round = input.round || "last";
  const URL = `/f1/${season}/${round}/driverStandings.json`;
  const data = await dataSources.f1API.get(URL);
  const list = data.MRData.StandingsTable.StandingsLists[0];

  // driver search
  // http://ergast.com/api/f1/drivers/alonso/driverStandings

  // all winners
  // http://ergast.com/api/f1/driverStandings/1

  const DriverStandings = {
    series: data.MRData.series,
    season: list.season,
    round: list.round,
    drivers: list.DriverStandings.map((c) => {
      return {
        position: c.position,
        positionText: c.positionText,
        points: c.points,
        wins: c.wins,
        number: c.Driver.permanentNumber,
        driverId: c.Driver.driverId,
        code: c.Driver.code,
        driverUrl: c.Driver.url,
        firstName: c.Driver.givenName,
        lastName: c.Driver.familyName,
        dateOfBirth: c.Driver.dateOfBirth,
        nationality: c.Driver.nationality,
        team: {
          name: c.Constructors[0].name,
          id: c.Constructors[0].constructorId,
          url: c.Constructors[0].url,
          color: teamsColors[c.Constructors[0].name],
          nationality: c.Constructors[0].nationality,
        },
      };
    }),
  };

  return DriverStandings;
};

module.exports = { DriverStandingsResolver };
