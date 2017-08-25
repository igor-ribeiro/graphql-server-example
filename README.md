## The problem
When I define a query resolver inside `Query: {}` it doesn't work.
I have two queries, `owners` (doesn't work) and `companies` (works).

## Setup
- Install dependencies
- Run the `start` command
- Open: http://localhost:4000/graphql?query=%7B%0A%20%20owners%20%7B%0A%20%20%20%20firstName%0A%20%20%7D%0A%20%20%0A%20%20companies%20%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D%0A