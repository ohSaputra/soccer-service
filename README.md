
<!-- Dependency Status -->
<a href="https://david-dm.org/ohsaputra/soccer-service">
  <img src="https://david-dm.org/ohsaputra/soccer-service.svg" alt="Dependency Status" />
</a>
<!-- devDependency Status -->
<a href="https://david-dm.org/ohsaputra/soccer-service?type=dev">
  <img src="https://david-dm.org/ohsaputra/soccer-service/dev-status.svg" alt="devDependency Status" />
</a>

# Backend Assignment
This repo is a backend assignment test for KitaBisa.

## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

Install yarn globally

```bash
yarn global add yarn
```

### Step 2: Create new Project

Fork, Clone or download this project. Configure your package.json for your new project.

Then copy the `.env.default` file and rename it to `.env`.

```bash
cp .env.default .env
```

Then setup your application environment.

```bash
yarn
```

> This installs all dependencies with yarn

### Step 3: Serve your App

Go to the project dir and start your app with this yarn script.

```bash
yarn start
```

Running the above commands results in 
* **API Server** running at `http://localhost:8888/api`
* **Endpoint Documentation** hosted at `http://localhost:8888/api/docs`

> This starts a local server using `nodemon`, which will watch for any file changes and will restart the server according to these changes.
> The server address will be displayed to you as `http://localhost:8888/api`.

### Directory Structure

```
+-- __test
|   +-- errors
|   |   |   +-- ApplicationError.test.ts
|   +-- middleware
|   |   |   +-- request-middleware.test.ts
|   +-- app.test.ts
|   +-- players.test.ts
|   +-- teams.test.ts
+-- app
|   +-- controllers
|   |   +-- players
|   |   |   +-- add.ts
|   |   |   +-- list.ts
|   |   |   +-- index.ts
|   |   |   +-- remove.ts
|   |   |   +-- show.ts
|   |   |   +-- update.ts
|   |   +-- teams
|   |   |   +-- add.ts
|   |   |   +-- list.ts
|   |   |   +-- index.ts
|   |   |   +-- remove.ts
|   |   |   +-- show.ts
|   |   |   +-- update.ts
|   +-- errors
|   |   +-- application-error.ts
|   |   +-- bad-request.ts
|   |   +-- handler.ts
|   +-- middleware
|   |   +-- request-middleware.ts
|   +-- models
|   |   +-- players.entity.ts
|   |   +-- teams.entity.ts
|   +-- service
|   |   +-- database-service.ts
|   |   +-- players-service.ts
|   |   +-- teams-service.ts
|   +-- start
|   |   +-- route
|   |   |   +-- players.ts
|   |   |   +-- swagger.ts
|   |   |   +-- teams.ts
|   |   +-- index.ts
|   |   +-- populateData.ts
|   |   +-- routes.ts
|   +-- env.ts
|   +-- server.ts
+-- configs
|   +-- cors.ts
|   +-- logger.ts
|   +-- typeorm.ts
+-- scripts
|   +-- dev.sh
+-- .env
+-- .env.default
+-- .eslintignore
+-- mockPlayers.json
+-- mockTeams.json
+-- .eslintrc.json
+-- .gitignore
+-- jest.config.js
+-- nodemon.json
+-- openapi.json
+-- yarn.lock
+-- package.json
+-- README.md
+-- tsconfig.json
```

### Install

- Install all dependencies with `yarn`

### Linting

- Run code quality analysis using `yarn lint`. This runs tslint.
- There is also a vscode task for this called `lint`.

### Tests

- Run the unit tests using `yarn test` (There is also a vscode task for this called `test`).

### API Documentation

- Run swagger api documentation via this link `http://localhost:8888/api/docs`

### Coverage

File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------------|---------|----------|---------|---------|-------------------
All files                |   86.49 |    69.05 |   76.67 |   85.99 |
 app                     |   14.29 |       75 |       0 |   14.29 |
  env.ts                 |     100 |       75 |     100 |     100 | 12-18
  server.ts              |       0 |      100 |       0 |       0 | 2-26
 app/controllers/players |     100 |      100 |     100 |     100 |
  add.ts                 |     100 |      100 |     100 |     100 |
  index.ts               |     100 |      100 |     100 |     100 |
  list.ts                |     100 |      100 |     100 |     100 |
  remove.ts              |     100 |      100 |     100 |     100 |
  show.ts                |     100 |      100 |     100 |     100 |
  update.ts              |     100 |      100 |     100 |     100 |
 app/controllers/teams   |     100 |      100 |     100 |     100 |
  add.ts                 |     100 |      100 |     100 |     100 |
  index.ts               |     100 |      100 |     100 |     100 |
  list.ts                |     100 |      100 |     100 |     100 |
  remove.ts              |     100 |      100 |     100 |     100 |
  show.ts                |     100 |      100 |     100 |     100 |
  update.ts              |     100 |      100 |     100 |     100 |
 app/errors              |   82.35 |    43.75 |   66.67 |   82.35 |
  application-error.ts   |     100 |      100 |     100 |     100 |
  bad-request.ts         |     100 |       75 |     100 |     100 | 5
  handler.ts             |      50 |        0 |       0 |      50 | 6-10
 app/middlewares         |   86.96 |       82 |     100 |   86.36 |
  request.ts             |   86.96 |       82 |     100 |   86.36 | 11,43,49
 app/models              |     100 |      100 |     100 |     100 |
  players.entity.ts      |     100 |      100 |     100 |     100 |
  teams.entity.ts        |     100 |      100 |     100 |     100 |
 app/services            |   75.44 |    16.67 |   77.78 |   75.44 |
  database-service.ts    |    61.9 |       50 |      75 |    61.9 | 19-22,28-31
  players-service.ts     |   88.89 |        0 |   85.71 |   88.89 | 86-87
  teams-service.ts       |   77.78 |        0 |   71.43 |   77.78 | 56-57,83-84
 app/start               |   81.08 |      100 |   33.33 |   82.86 |
  index.ts               |     100 |      100 |     100 |     100 |
  populateData.ts        |   46.15 |      100 |       0 |      50 | 12-24
  routes.ts              |     100 |      100 |     100 |     100 |
 app/start/route         |     100 |      100 |     100 |     100 |
  players.ts             |     100 |      100 |     100 |     100 |
  swagger.ts             |     100 |      100 |     100 |     100 |
  teams.ts               |     100 |      100 |     100 |     100 |