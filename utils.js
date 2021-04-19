const teamsColors = {
  Mercedes: "#00d2be",
  "Red Bull": "#0600ef",
  McLaren: "#FF9800",
  Ferrari: "#dc0000",
  AlphaTauri: "#2b4562",
  "Aston Martin": "#006f62",
  "Alfa Romeo": "#900000",
  "Alpine F1 Team": "#0090ff",
  Williams: "#005aff",
  "Haas F1 Team": "#fafafa",
};

const getDriver = (driver) => ({
  // "alonso"
  id: driver.driverId,
  // "14"
  number: driver.number || driver.permanentNumber,
  // "ALO",
  code: driver.code,
  // "http://en.wikipedia.org/wiki/Fernando_Alonso"
  driverUrl: driver.url,
  // "Fernando",
  firstName: driver.givenName,
  // "Alonso",
  lastName: driver.familyName,
  // "1981-07-29",
  dateOfBirth: driver.dateOfBirth,
  // "Spanish"
  nationality: driver.nationality,
});

module.exports = { getDriver, teamsColors };
