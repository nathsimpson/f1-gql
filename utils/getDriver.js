const { getNationFlag } = require("./nationalityFlags");

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
  // Emoji of driver's home country
  flag: getNationFlag(driver.nationality),
});

module.exports = { getDriver };
