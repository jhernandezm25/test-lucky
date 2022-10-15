# Lucky Test
##  This is a login Api

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Setup

- Open docker desktop
- Download this project
- Execute in order the following commands
```sh
cd app-lucky
npm i
npm runstartApp
node run start
```


## Methods

| Method | Route | description |
| ------ | ------ | ------ |
| CreateUser | localhost:3000/user/create | This method create a new user in the database |

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

| Method | Route | Description |
| ------ | ------ | ------ |
| Login | http://localhost:3000/user/login | Validate if the credentials are valid and return a token |

 - Body
```javascript
{
    "username":"lookiron2",
    "password":"1234bcA"
}
```

| Method | Route | Description | constrain |
| ------ | ------ | ------ | ------ |
| GetProfile | localhost:3000/profile/{id} | Get the profile information|Authorization with bearer token |


