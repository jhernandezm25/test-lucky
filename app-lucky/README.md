# Lucky Test
##  This is a login Api

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Setup

- Open docker desktop
- Download this project
- Execute in order the following commands for initalize the project
```sh
cd app-lucky
npm i
npm runs tartApp
node run start
```
- In other terminal execute
```sh
cd app-lucky
node run start
```

## Methods

| Method | Type |Route | description |
| ------ | ------ | ------ |------ |
| CreateUser | POST | localhost:3000/user/create | This method create a new user in the database |

 - Body
```javascript
{
    "username": "lookiron2",
    "password": "1234bcA",
    "name": "Esteban",
    "address": "Cali",
    "cityId": 1
}
```

| Method | Type  Route | Description |
| ------ |------ | ------ | ------ |
| Login | POST | http://localhost:3000/user/login | This method validate if the credentials are valid and return a token |

 - Body
```javascript
{
    "username":"lookiron2",
    "password":"1234bcA"
}
```

| Method | Type | Route | Description | constrain |
| ------ | ------ |------ | ------ | ------ |
| GetProfile | GET | localhost:3000/profile/{id} | This method get the profile information|Authorization with bearer token |


