# FINANCIAL WALLET

## Description

This project is a personal wallet for making money transactions.

## Current System Functionality


| Task           | Back-end | Front-end   | Current Status | Finished | 
|----------------|---------------|---------------|----------------|-----------|
| Sign Up | Yes  | Yes | Done | OK
| Sign In   | Yes  | Yes | Done | OK
| Dashboard   | Yes  | Not | 55% |

#### Technologies

- TypeScript
- NodeJS
- PostgreSQL with TypeORM
- React with Styled Components


## How To Use

### Installation
- Run on backend folder

```
    yarn install
```
- (Docker) Create a database with the configuration information contained in the ormconfig.json file
```
    https://hub.docker.com/_/postgres
```
- Run migrations
```
    yarn typeorm migration:run
```

- Run on front-end folder

```
    yarn install or yarn
```


### Run back-end
```
    yarn dev:server
```

### Run front-end
```
    yarn start
```





## Author Info

- Linkedin - [Aristeu Garcia](https://www.linkedin.com/in/aristeu-garcia-7007a0202)
