# Formula 1 GraphQL

Formula 1 GraphQL (F1-GQL) is a GraphQL API which provides information on Formula 1 race results, championship standings and more.

Data is provided by [the Ergast API](http://ergast.com/mrd/).

## How to use

1. Clone the repo

```
git clone https://github.com/nathsimpson/f1-gql.git
cd f1-gql
```

2. Run `yarn` to install dependencies.
3. Run `yarn start` to run the graphql server.

Once the GraphQL server is running. Go to [http://localhost:4000/graphql](http://localhost:4000/graphql) and the GraphQL environment should appear. From there you can start experimenting with queries.

```graphql
query F1Results {
  Results {
    season
    raceName
    results {
      position
      timeString
      driver {
        id
        firstName
        lastName
        number
      }
    }
  }
}
```

Open the 'docs' tab to browse the available queries.

## More info

### What is Ergast?

[Ergast](http://ergast.com/mrd/) is a web service that provides a historical record of motor racing data for non-commercial purposes. The API provides data for the Formula One series, from the beginning of the world championships in 1950.

### What is Formula 1?

Formula One is the highest class of international auto racing for single-seater formula racing cars.

The World Drivers' Championship, which became the FIA Formula One World Championship in 1981, has been one of the premier forms of racing around the world since its inaugural season in 1950.

A Formula One season consists of a series of races, known as Grands Prix (French for 'grand prizes' or 'great prizes'), which take place worldwide on purpose-built circuits and closed public roads.
