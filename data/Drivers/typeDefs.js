const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Driver {
  "alonso"
  id: ID
  "14"
  number: String
  "RIC, HAM, VER"
  code: String
  "Fernando"
  firstName: String
  "Alonso"
  lastName: String
  "1981-07-29"
  dateOfBirth: String
  "Spanish"
  nationality: String
  "http://en.wikipedia.org/wiki/Fernando_Alonso"
  driverUrl: String
}

`;

module.exports = { typeDefs };
